function encrypt() {
    var inputText = document.getElementById("inputText").value;
    var passphrase = document.getElementById("passphrase").value;

    if (!passphrase) {
        alert("Please enter a passphrase.");
        return;
    }

    var ciphertext = CryptoJS.AES.encrypt(inputText, passphrase).toString();
    document.getElementById("outputText").value = ciphertext;
}

function decrypt() {
    var inputText = document.getElementById("inputText").value;
    var passphrase = document.getElementById("passphrase").value;

    if (!passphrase) {
        alert("Please enter a passphrase.");
        return;
    }

    try {
        var bytes  = CryptoJS.AES.decrypt(inputText, passphrase);
        var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        document.getElementById("outputText").value = plaintext;
    } catch (error) {
        alert("Decryption failed. Please check your passphrase or input text.");
    }
}

