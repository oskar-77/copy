const _0x22a6f2=_0x5cd2;(function(_0x1d973e,_0x483e44){const _0xeb9532=_0x5cd2,_0x9f7ed3=_0x1d973e();while(!![]){try{const _0x1f6f26=-parseInt(_0xeb9532(0x171))/0x1+parseInt(_0xeb9532(0x130))/0x2*(-parseInt(_0xeb9532(0x178))/0x3)+parseInt(_0xeb9532(0x152))/0x4+parseInt(_0xeb9532(0x167))/0x5+-parseInt(_0xeb9532(0x142))/0x6*(-parseInt(_0xeb9532(0x128))/0x7)+-parseInt(_0xeb9532(0x14b))/0x8*(parseInt(_0xeb9532(0x163))/0x9)+-parseInt(_0xeb9532(0x17a))/0xa*(-parseInt(_0xeb9532(0x14e))/0xb);if(_0x1f6f26===_0x483e44)break;else _0x9f7ed3['push'](_0x9f7ed3['shift']());}catch(_0x26ec52){_0x9f7ed3['push'](_0x9f7ed3['shift']());}}}(_0xd8cd,0x25221));const editor=ace[_0x22a6f2(0x144)](_0x22a6f2(0x15e));editor[_0x22a6f2(0x16e)]('ace/theme/monokai'),editor['session'][_0x22a6f2(0x136)]('ace/mode/html'),editor[_0x22a6f2(0x16a)]({'enableBasicAutocompletion':!![],'enableSnippets':!![],'enableLiveAutocompletion':!![]});function _0xd8cd(){const _0x521383=['change','includes','location','style','createObjectURL','Done\x20Save\x20File\x20:\x20','There\x20is\x20no\x20data\x20to\x20save.','oskar1python@gmail.com','Done!','header','165234AHLQEk','none','edit','New_file','result','trim','getElementById','Show\x20editor','getSession','8DtJXrZ','innerText','output','3971QkFyDL','msRequestFullscreen','50%','100vh','305224LMElEq','fileType','href','100%','createElement','Fill\x20page','readAsText','fileInfo','appendChild','fileInput','documentElement','open','editor','height','expandButton','requestFullscreen','SomeOne!\x20changed\x20the\x20equity,return\x20the\x20equity\x20to\x20run\x20the\x20website.','177102PQoajQ','contentDocument','name','width','1360875oYOMhb','error.html','options','setOptions','click','textContent','copy-btn','setTheme','write','document','206541muilPg','download','.html','fileName','setValue','value','onload','400515kbkiqW','body','7460DhQBYB','target','webkitRequestFullscreen','writeText','7ZmdGBn','getValue','flex','Show\x20mix','Done\x20Great\x20New\x20File.','addEventListener','display','catch','4MMFnTW','100vw','text/plain','session','files','fullscreen-btn','setMode','block'];_0xd8cd=function(){return _0x521383;};return _0xd8cd();}function updateOutput(){const _0x39cff2=_0x22a6f2,_0x46114b=editor['getValue'](),_0x5385d1=document[_0x39cff2(0x148)](_0x39cff2(0x14d));_0x5385d1[_0x39cff2(0x164)][_0x39cff2(0x15d)](),_0x5385d1[_0x39cff2(0x164)][_0x39cff2(0x16f)](_0x46114b),_0x5385d1[_0x39cff2(0x164)]['close']();}editor[_0x22a6f2(0x133)]['on'](_0x22a6f2(0x138),updateOutput),updateOutput();const copyButton=document[_0x22a6f2(0x148)](_0x22a6f2(0x16d));copyButton[_0x22a6f2(0x12d)](_0x22a6f2(0x16b),()=>{const _0x35fd90=_0x22a6f2,_0xf461d5=editor['getValue']();navigator['clipboard'][_0x35fd90(0x127)](_0xf461d5)['then'](()=>{const _0x482c6b=_0x35fd90;copyButton[_0x482c6b(0x16c)]=_0x482c6b(0x140),setTimeout(()=>{const _0x31fa07=_0x482c6b;copyButton[_0x31fa07(0x16c)]='Copy';},0x7d0);})[_0x35fd90(0x12f)](()=>{alert('Copying\x20has\x20not\x20been\x20done!\x20');});});const fullscreenButton=document['getElementById'](_0x22a6f2(0x135));fullscreenButton[_0x22a6f2(0x12d)](_0x22a6f2(0x16b),()=>{const _0x23d681=_0x22a6f2,_0x4a7349=document[_0x23d681(0x15c)];if(_0x4a7349[_0x23d681(0x161)])_0x4a7349['requestFullscreen']();else{if(_0x4a7349['mozRequestFullScreen'])_0x4a7349['mozRequestFullScreen']();else{if(_0x4a7349[_0x23d681(0x126)])_0x4a7349['webkitRequestFullscreen']();else _0x4a7349[_0x23d681(0x14f)]&&_0x4a7349[_0x23d681(0x14f)]();}}});let isExpanded=0x0;const expandButton=document['getElementById'](_0x22a6f2(0x160)),hed=document[_0x22a6f2(0x148)](_0x22a6f2(0x141)),dropdownMenu1=document[_0x22a6f2(0x148)](_0x22a6f2(0x14d)),dropeditor=document[_0x22a6f2(0x148)](_0x22a6f2(0x15e));expandButton[_0x22a6f2(0x12d)](_0x22a6f2(0x16b),()=>{const _0x4a1640=_0x22a6f2;dropeditor[_0x4a1640(0x13b)]['display']=_0x4a1640(0x143);if(isExpanded===0x0)dropdownMenu1[_0x4a1640(0x13b)]['width']=_0x4a1640(0x131),dropdownMenu1[_0x4a1640(0x13b)][_0x4a1640(0x15f)]=_0x4a1640(0x151),expandButton[_0x4a1640(0x16c)]=_0x4a1640(0x149),hed[_0x4a1640(0x13b)]['display']=_0x4a1640(0x143),isExpanded=0x2;else isExpanded===0x2?(hed[_0x4a1640(0x13b)][_0x4a1640(0x12e)]=_0x4a1640(0x137),dropdownMenu1['style'][_0x4a1640(0x12e)]=_0x4a1640(0x143),dropeditor[_0x4a1640(0x13b)][_0x4a1640(0x12e)]=_0x4a1640(0x12a),expandButton['textContent']=_0x4a1640(0x12b),isExpanded=0x4):(dropeditor[_0x4a1640(0x13b)][_0x4a1640(0x12e)]='flex',dropdownMenu1['style'][_0x4a1640(0x166)]=_0x4a1640(0x155),dropdownMenu1['style'][_0x4a1640(0x15f)]=_0x4a1640(0x150),expandButton[_0x4a1640(0x16c)]=_0x4a1640(0x157),hed[_0x4a1640(0x13b)][_0x4a1640(0x12e)]=_0x4a1640(0x137),dropdownMenu1[_0x4a1640(0x13b)][_0x4a1640(0x12e)]='flex',isExpanded=0x0);}),document[_0x22a6f2(0x179)][_0x22a6f2(0x13b)]['display']='none';function checkForText(){const _0x2c352c=_0x22a6f2,_0x4c2ecd='Mr.OSKAR',_0x4496bf=_0x2c352c(0x13f),_0x495bd2=document[_0x2c352c(0x179)][_0x2c352c(0x14c)],_0xed4e34=document[_0x2c352c(0x148)]('header')[_0x2c352c(0x14c)];(_0x495bd2['includes'](_0x4c2ecd),_0x495bd2['includes'](_0x4496bf))?_0xed4e34[_0x2c352c(0x139)](_0x4c2ecd)?document[_0x2c352c(0x179)][_0x2c352c(0x13b)][_0x2c352c(0x12e)]=_0x2c352c(0x12a):(alert('SomeOne!\x20changed\x20the\x20equity,return\x20the\x20equity\x20to\x20run\x20the\x20website.'),window[_0x2c352c(0x13a)][_0x2c352c(0x154)]=_0x2c352c(0x168)):(alert(_0x2c352c(0x162)),window[_0x2c352c(0x13a)]['href']=_0x2c352c(0x168));}window[_0x22a6f2(0x177)]=checkForText();const fileInput=document[_0x22a6f2(0x148)](_0x22a6f2(0x15b)),fileContent=document[_0x22a6f2(0x148)]('editor'),fileInfo=document['getElementById'](_0x22a6f2(0x159)),fileName=document[_0x22a6f2(0x148)](_0x22a6f2(0x174)),fileType=document[_0x22a6f2(0x148)](_0x22a6f2(0x153));function _0x5cd2(_0x539f5,_0x131be0){const _0xd8cd6a=_0xd8cd();return _0x5cd2=function(_0x5cd27c,_0x767950){_0x5cd27c=_0x5cd27c-0x126;let _0x1f5aa6=_0xd8cd6a[_0x5cd27c];return _0x1f5aa6;},_0x5cd2(_0x539f5,_0x131be0);}function openFile(){const _0x3a7b86=_0x22a6f2;fileInput[_0x3a7b86(0x12d)](_0x3a7b86(0x138),function(_0x52dd9c){const _0x8e22db=_0x3a7b86,_0x1743f1=_0x52dd9c['target'][_0x8e22db(0x134)][0x0];if(!_0x1743f1)return;const _0x28c10e=_0x1743f1[_0x8e22db(0x165)]['split']('.');fileName[_0x8e22db(0x176)]=_0x28c10e[0x0];const _0x89d751='.'+_0x28c10e[0x1];for(let _0x330ddf of fileType[_0x8e22db(0x169)]){if(_0x330ddf[_0x8e22db(0x176)]===_0x89d751){fileType['value']=_0x89d751;break;}}const _0x2c7c13=new FileReader();_0x2c7c13[_0x8e22db(0x177)]=function(_0xf5c23a){const _0x147fd2=_0x8e22db;editor['getSession']()[_0x147fd2(0x175)](''),editor[_0x147fd2(0x14a)]()[_0x147fd2(0x175)](_0xf5c23a[_0x147fd2(0x17b)][_0x147fd2(0x146)]),fileInfo['textContent']='Done\x20opening\x20file\x20:\x20'+_0x1743f1[_0x147fd2(0x165)];},_0x2c7c13[_0x8e22db(0x158)](_0x1743f1);}),fileInput[_0x3a7b86(0x16b)]();}function saveFile(){const _0x536304=_0x22a6f2,_0x3b2392=editor[_0x536304(0x129)]();if(!_0x3b2392){alert(_0x536304(0x13e));return;}const _0x3ca1d6=fileName[_0x536304(0x176)][_0x536304(0x147)]()||_0x536304(0x170),_0x10dda3=fileType[_0x536304(0x176)],_0x412349=_0x3ca1d6+_0x10dda3,_0x39ffc5=new Blob([_0x3b2392],{'type':_0x536304(0x132)}),_0x11ca4e=URL[_0x536304(0x13c)](_0x39ffc5),_0x380256=document[_0x536304(0x156)]('a');_0x380256[_0x536304(0x154)]=_0x11ca4e,_0x380256[_0x536304(0x172)]=_0x412349,document[_0x536304(0x179)][_0x536304(0x15a)](_0x380256),_0x380256[_0x536304(0x16b)](),document[_0x536304(0x179)]['removeChild'](_0x380256),URL['revokeObjectURL'](_0x11ca4e),fileInfo['textContent']=_0x536304(0x13d)+_0x412349;}function createNewFile(){const _0x31dcdb=_0x22a6f2;editor[_0x31dcdb(0x14a)]()['setValue'](''),fileName[_0x31dcdb(0x176)]=_0x31dcdb(0x145),fileType['value']=_0x31dcdb(0x173),fileInfo[_0x31dcdb(0x16c)]=_0x31dcdb(0x12c);}