import fs from "fs";
import os from "os";

import { Keypair } from "@solana/web3.js";

export const loadKeypairFromFile = (filePath: string): Keypair => {
  return Keypair.fromSecretKey(
    new Uint8Array(
      JSON.parse(
        fs.readFileSync(filePath.replace(/^~/, os.homedir())).toString()
      )
    )
  );
};

export const getUnixTimestamp = () => {
  return Math.floor(new Date().getTime() / 1000);
};

export async function sleep(seconds: any): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
