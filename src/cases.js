import React from "react";
import rp from "request-promise";
import cheerio from "cheerio";

let c = [];
rp('https://www.mohfw.gov.in/',function(err,res,body){
  let $ = cheerio.load(body);

  let a = $('.bg-blue');
  let b = $('.bg-green');
  let d = $('.bg-red');
  let e = $('.bg-orange');
  c.push(a[0].children[0].parent.children[3].children[0].data);
  c.push(b[0].children[0].parent.children[3].children[0].data);
  c.push(d[0].children[0].parent.children[3].children[0].data);
  c.push(e[0].children[0].parent.children[3].children[0].data);
});
function Cases(){
  return(
    {

  <h3>{c[0]}</h3>
<h3>{c[1]}</h3>
<h3>{c[2]}</h3>
<h3>{c[3]}</h3>
    }
  );
}
export default Cases;
