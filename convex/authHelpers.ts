export async function derivePasswordHash(password: string, saltHex?: string) {
  const enc = new TextEncoder();
  const pwd = enc.encode(password);

  function hexToBytes(hex: string) {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < bytes.length; i++) bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
    return bytes;
  }
  function bytesToHex(bytes: ArrayBuffer | Uint8Array) {
    const b = new Uint8Array(bytes instanceof ArrayBuffer ? bytes : bytes.buffer);
    return Array.from(b).map((x) => x.toString(16).padStart(2, "0")).join("");
  }

  const salt = saltHex ? hexToBytes(saltHex) : crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey("raw", pwd, { name: "PBKDF2" }, false, ["deriveBits"]);
  const derived = await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: 120000, hash: "SHA-256" }, key, 256);
  return `${bytesToHex(salt)}:${bytesToHex(derived)}`;
}

export async function verifyPassword(password: string, stored: string) {
  if (!stored) return false;
  const [saltHex, hashHex] = stored.split(":");
  if (!saltHex || !hashHex) return false;
  const candidate = await derivePasswordHash(password, saltHex);
  return candidate === stored;
}
