// Wait for page to load
window.onload = () => {
  // Monitor the "format field" and show the "alphabet" field only when relevant
  document.getElementById("format").addEventListener("input", (e) => {
    if (document.getElementById("format").value.includes("{:a}")) {
      document.getElementById("alphabetDiv").style.display = "inline";
    } else {
      document.getElementById("alphabetDiv").style.display = "none";
    }
  });

  document.getElementById("frm").onsubmit = (e) => {
    // Prevents page reload
    e.preventDefault();

    // Get the inputs
    let format = document.getElementById("format").value;
    let length = document.getElementById("length").value;

    // Generate random data
    let randomBytes = new Uint8Array(length);
    crypto.getRandomValues(randomBytes);

    // Format the data into a flag
    let flag = format
      .replace("{:x}", randomBytes.toHex())
      .replace("{:X}", randomBytes.toHex().toUpperCase())
      .replace("{:b64}", randomBytes.toBase64())
      .replace("{:b64-}", randomBytes.toBase64().removeBase64Padding())
      .replace("{:b64url}", randomBytes.toBase64().convertToBase64Url())
      .replace(
        "{:b64url-}",
        randomBytes.toBase64().convertToBase64Url().removeBase64Padding(),
      )
      .replace("{:a}", randomFromAlphabet(randomBytes));

    // Show the flag
    document.getElementById("flag").value = flag;
  };
};

String.prototype.removeBase64Padding = function () {
  return this.replace("=", "");
};

String.prototype.convertToBase64Url = function () {
  return this.replace("-", "+").replace("_", "/");
};

function randomFromAlphabet(x) {
  // Last time I checked, this method did not seem to have modulo bias. Please feel free to PR a fix if that changes
  let alphabet = document.getElementById("alphabet").value;
  return [...x]
    .map((y) => alphabet[Math.floor((y / 256) * alphabet.length)])
    .join("");
}
