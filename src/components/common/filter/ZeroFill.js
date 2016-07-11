module.exports = function (size,length) {
    let result=size.toString().split(".");
    switch (true) {
        case length==0:
            result=result[0];
            break;

        case length==1:
            if (result[1]!=undefined&&result[1]!='') {
                let resultSplit=result[1].toString().split("")
                result=result[0]+'.'+resultSplit[0];
            }else{
                result=Number(result[0]+'.'+0);
            }
            break;

        case length==2:
            if (result[1]!=undefined&&result[1]!='') {
                let resultSplit=result[1].toString().split("")
                if (resultSplit[1]==undefined) {
                    resultSplit[1]=0;
                }
                result=result[0]+'.'+resultSplit[0]+resultSplit[1];
            }else{
                result=Number(result[0]+'.'+'00');
            }
            break;

        case length==3:
            if (result[1]!=undefined&&result[1]!='') {
                let resultSplit=result[1].toString().split("")
                if (resultSplit[1]==undefined) {
                    resultSplit[1]=0;
                }
                if (resultSplit[2]==undefined) {
                    resultSplit[2]=0;
                }
                result=result[0]+'.'+resultSplit[0]+resultSplit[1]+resultSplit[2];
            }else{
                result=Number(result[0]+'.'+'000');
            }
            break;

        case length==4:
            if (result[1]!=undefined&&result[1]!='') {
                let resultSplit=result[1].toString().split("")
                if (resultSplit[1]==undefined) {
                    resultSplit[1]=0;
                }
                if (resultSplit[2]==undefined) {
                    resultSplit[2]=0;
                }
                if (resultSplit[3]==undefined) {
                    resultSplit[3]=0;
                }
                result=result[0]+'.'+resultSplit[0]+resultSplit[1]+resultSplit[2]+resultSplit[3];
            }else{
                result=Number(result[0]+'.'+'0000');
            }
            break;

        default:
            result=result[0];
    }
    return result;
};
