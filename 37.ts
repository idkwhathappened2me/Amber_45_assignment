function make_shirt(size:string = 'large', message:string = 'I love TypeScript'){
    console.log('The shirt size is '+size+' and the message is '+message)
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'Different Message');