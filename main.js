aheuiNumber = {
    numOfIndex: [0, 2, 3, 3, 7, 2, 1, 2, 1, 4],
    n1: ['반밧나', '밪반타'],
    n2: ['박', '반', '밧'],
    n3: ['받', '밪', '밬'],
    n4: ['밤', '밥', '밫', '밭', '밮', '밖', '밨'],
    n5: ['발', '밙'],
    n6: ['밦'],
    n7: ['밝', '밠'],
    n8: ['밣'],
    n9: ['밟', '밟', '밢', '밡'],
    digit: ['사', '삭', '산', '삳', '살'],
    final: ["희", "하앗", "하앙", "하아앙키위커여워", "하아악키위기여워", "호에에에엥", "훼에에엥", "하와와개발자쨩", "호에엥보마조아"]
};

function reset() {
    document.getElementById('string').value = "";
    document.getElementById('aheui').value = "";
}

function randNum(num) {
    var i = "";
    switch (num) {
        case 1:
            i = aheuiNumber.n1[Math.floor(Math.random() * aheuiNumber.numOfIndex[1])];
            break;
        case 2:
            i = aheuiNumber.n2[Math.floor(Math.random() * aheuiNumber.numOfIndex[2])];
            break;
        case 3:
            i = aheuiNumber.n3[Math.floor(Math.random() * aheuiNumber.numOfIndex[3])];
            break;
        case 4:
            i = aheuiNumber.n4[Math.floor(Math.random() * aheuiNumber.numOfIndex[4])];
            break;
        case 5:
            i = aheuiNumber.n5[Math.floor(Math.random() * aheuiNumber.numOfIndex[5])];
            break;
        case 6:
            i = aheuiNumber.n6[Math.floor(Math.random() * aheuiNumber.numOfIndex[6])];
            break;
        case 7:
            i = aheuiNumber.n7[Math.floor(Math.random() * aheuiNumber.numOfIndex[7])];
            break;
        case 8:
            i = aheuiNumber.n8[Math.floor(Math.random() * aheuiNumber.numOfIndex[8])];
            break;
        case 9:
            i = aheuiNumber.n9[Math.floor(Math.random() * aheuiNumber.numOfIndex[9])];
            break;
    }
    return i;
}

function aheuiro() {
    var aheuiCode = "";
    var unicodeNumber = new Array();
    var originString = document.getElementById('string').value;
    if (originString == "") {
        return;
    }
    var originStringLength = originString.length;
    var maxUnicodeNumber = 0;
    for (var i = 0; i < originStringLength; i++) {
        unicodeNumber[i] = originString.charCodeAt(i);
        if (unicodeNumber[i] > maxUnicodeNumber) {
            maxUnicodeNumber = unicodeNumber[i];
        }
    }
    var maxNumDigit = maxUnicodeNumber.toString().length;
    if (maxNumDigit >= 2) { //유니코드가 가장 큰 글자의 유니코드가 10 이상일때
        aheuiCode += '삭' + randNum(5) + randNum(2) + "따";
        //ㄱ 스택에 10 저장
    }
    if (maxNumDigit >= 3) { //유니코드가 가장 큰 글자의 유니코드가 100 이상일때
        aheuiCode += '산' + randNum(5) + randNum(4) + randNum(5) + "따따";
        //ㄴ 스택에 100 저장
    }
    if (maxNumDigit >= 4) { //유니코드가 가장 큰 글자의 유니코드가 1000 이상일때
        aheuiCode += '삳' + randNum(5) + randNum(5) + randNum(8) + randNum(5) + "따따따";
        //ㄷ 스택에 1000 저장
    }
    if (maxNumDigit >= 5) { //유니코드가 가장 큰 글자의 유니코드가 10000 이상일때(한글이 포함될경우 무조건)
        aheuiCode += "살" + randNum(5) + randNum(4) + randNum(5) +
            randNum(5) + randNum(4) + randNum(5) + "따따따따따";
        //ㄹ 스택에 10000 저장
    }
    for (var i = 0; i < originStringLength; i++) {
        console.log(unicodeNumber[i]);
        if (unicodeNumber[i] >= 10000) {
            var temp = Math.floor(unicodeNumber[i] / 10000);
            if (temp != 1) {
                aheuiCode += '사' + randNum(temp);
            }
            aheuiCode += "살빠싸사" + (temp != 1 ? "따" : "");
        }
        if (unicodeNumber[i] >= 1000) {
            var temp = Math.floor((unicodeNumber[i] / 1000) % 10);
            if (temp != 0) {
                if (temp != 1) {
                    aheuiCode += '사' + randNum(temp);
                }
                aheuiCode += "삳빠싸사" + (temp != 1 ? "따" : "") + (unicodeNumber[i] >= 10000 ? "다" : "");
            }
        }
        if (unicodeNumber[i] >= 100) {
            var temp = Math.floor((unicodeNumber[i] / 100) % 10);
            if (temp != 0) {
                if (temp != 1) {
                    aheuiCode += '사' + randNum(temp);
                }
                aheuiCode += "산빠싸사" + (temp != 1 ? "따" : "") + (unicodeNumber[i] >= 1000 ? "다" : "");
            }
        }
        if (unicodeNumber[i] >= 10) {
            var temp = Math.floor((unicodeNumber[i] / 10) % 10);
            if (temp != 0) {
                if (temp != 1) {
                    if (temp == 0) {
                        break
                    }
                    aheuiCode += '사' + randNum(temp);
                }
                aheuiCode += "삭빠싸사" + (temp != 1 ? "따" : "") + (unicodeNumber[i] >= 100 ? "다" : "");
            }
        }
        var temp = Math.floor(unicodeNumber[i] % 10);
        if (temp != 0) {
            aheuiCode += randNum(temp) + (unicodeNumber[i] >= 10 ? "다" : "")
        }
        console.log(temp)
        aheuiCode += "맣";
    }
    aheuiCode += aheuiNumber.final[Math.floor(Math.random() * 9)];
    document.getElementById('aheui').value = aheuiCode;

}