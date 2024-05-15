const binaryData = atob({{data.base64}});

const uint8Array = new Uint8Array(binaryData.length);
for (var i = 0; i < binaryData.length; i++) {
    uint8Array[i] = binaryData.charCodeAt(i);
}

return  new Blob([uint8Array], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });