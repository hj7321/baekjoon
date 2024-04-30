process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let row = "";
    let col = "";
    for (let i = 1; i <= a; i++) {
        row += "*";
    }
    for (let i = 1; i <= b; i++) {
        col += row;
        if (i != b) col += "\n";
    }
    console.log(col);
});