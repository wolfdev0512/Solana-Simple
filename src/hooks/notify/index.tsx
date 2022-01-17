import React, { useCallback } from "react";
import { useSnackbar, VariantType } from "notistack";

export const useNotify = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleDismiss = useCallback(() => {
    closeSnackbar();
  }, [closeSnackbar]);

  return useCallback(
    (variant: VariantType, message: string, signature?: string) => {
      enqueueSnackbar(
        <div
          className="cursor-pointer flex flex-col items-start max-w-[300px]"
          onClick={() => handleDismiss()}
        >
          {message}
          {signature && (
            <div className="truncate max-w-[300px] ">
              <a
                href={`https://explorer.solana.com/tx/${signature}?cluster=${process.env.NEXT_PUBLIC_NETWORK}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-black truncate"
              >
                {signature}
              </a>
            </div>
          )}
        </div>,
        { variant, autoHideDuration: 90000 }
      );
    },
    [enqueueSnackbar]
  );
};
