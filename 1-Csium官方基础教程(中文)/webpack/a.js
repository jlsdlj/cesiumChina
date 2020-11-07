
require('./c.js');

//es6 方式引入
import l from './d.js';


//引用css报错，不成功
//require('./b.css');

document.getElementById('webpack').innerHTML='hello webpack';
console.log(l.a);