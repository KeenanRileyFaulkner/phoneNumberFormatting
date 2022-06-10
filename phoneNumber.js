const makePhoneNumber = (arrOfTen) => {
    if (arrOfTen.length !== 10) {
        throw `invalid length of array [${arrOfTen}] passed to makePhoneNumber()`;
    }

    let concat1 = "";
    let concat2 = "";
    let concat3 = "";

    concat1 += "("
    for(let i = 0; i < 3; ++i) {
        concat1 += arrOfTen[i];
    }
    concat1 += ") ";

    for(let i = 3; i < 6; ++i) {
        concat2 += arrOfTen[i];
    }
    concat2 += "-";

    for(let i = 6; i < 10; ++i) {
        concat3 += arrOfTen[i];
    }

    let phoneNumber = concat1 + concat2 + concat3;
    return phoneNumber;
}

console.log(makePhoneNumber([8,0,1,8,1,8,1,8,1,0]));