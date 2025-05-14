
// @ts-nocheck: 这个文件不检测类型

// @ts-ignore: 去掉any检测
function greet(name) {
    console.log(name);
    
}

greet(123)



function bye(msg) {

}

function liveDangerously(x?: number | null) {
    // No error
    console.log(x, typeof x);
  }

  liveDangerously(1)
  liveDangerously(null)
  liveDangerously()
  liveDangerously(undefined)


  function danger(x: number|null) {
    console.log("🚀 ~ danger ~ x:", x, typeof x)

    
  }

  danger()
  danger(undefined)// undefind, undefind // 虽然类型里的是 null，但传参 undefined 没问题
  danger(null) // null, object
  danger(111)
  danger('aaaaa')

  let no: undefined = null // 相互传，没问题
  let nol: null = no