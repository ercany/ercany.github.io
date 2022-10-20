const clist = [];
const v = document.getElementById('vid');
const cii = document.getElementById('cii');
const ci = document.getElementById('ci');
const cv = document.getElementById('cv');

var c = 1;
var cid = 0;
var clen = clist.length;

function cload(){
    let clp = clen+1;
    v.src = clist[clp];
    cii.innerHTML = "Kapalı ";
    ci.innerHTML = "";
    cv.innerHTML = "Ses yok";
}

    var capc = 7;

function changep(){
    for(i=0;i<=clen;i++){
        clist.push(`./video${i}.mp4`);
        clen++;
        if(clen==capc){
            break;
        }
    }
    v.src = clist[cid];
    cii.innerHTML = "Kanal ";
    ci.innerHTML = `${c}/${capc}`;
    cv.innerHTML = "50";
}

function changeu(){
    cid++;
    c++;
    if(cid < 0){
        if(clen <= 0){
            clen++;
            v.src = clist[clen];
            cii.innerHTML = "Kanal ";
            ci.innerHTML = `${clen+1}/${capc}`;
            cv.innerHTML = "50";
        }else{
            clen++;
            v.src = clist[clen];
            cii.innerHTML = "Kanal ";
            ci.innerHTML = `${clen+1}/${capc}`;
            cv.innerHTML = "50";
        }
    }else{
        v.src = clist[cid];
        cii.innerHTML = "Kanal ";
        ci.innerHTML = `${c}/${capc}`;
        cv.innerHTML = "50";
        if(cid==capc){
            cid = 0;
            c=1;
            console.log(cid);
            v.src = clist[cid];
            cii.innerHTML = "Kanal ";
            ci.innerHTML = `${c}/${capc}`;
            cv.innerHTML = "50";

        }
    }
}

function changed(){
    cid--;
    c--;
    if(cid < 0){
        if(clen <= 0){
            clen = parseInt(clist.length)-1;
            v.src = clist[clen];
            cii.innerHTML = "Kanal ";
            ci.innerHTML = `${clen+1}/${capc}`;
            cv.innerHTML = "50";
        }else{
            clen--;
            v.src = clist[clen];
            cii.innerHTML = "Kanal ";
            ci.innerHTML = `${clen+1}/${capc}`;
            cv.innerHTML = "50";
        }
    }else{
        v.src = clist[cid];
        cii.innerHTML = "Kanal ";
        ci.innerHTML = `${c}/${capc}`;
        cv.innerHTML = "50";
    }
}

var val = 50;

function changel(){
    v.volume = 0.1;
    val--;
    if (val == 0){
        cv.innerHTML = "0";
    }else{
        cv.innerHTML = val;
    }
}

function changer(){
    v.volume = 1;
    val++;
    if (val == 100){
        cv.innerHTML = "100";
    }else{
        cv.innerHTML = val;
    }
}
