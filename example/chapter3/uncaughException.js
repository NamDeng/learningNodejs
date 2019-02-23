const func = callback => process.nextTick(callback, "callback");

try {
    func(param => {
        a.a = 0;
    });
} catch (error) {
    console.log("exception!!!");
}

// 비동기 코드 에러 제어 방`법 
// 1. 비동기 코드 내에 try~catch 문을 직접 명시해 핸들링 한다.
// 
// func(param => {
//  try {
//        a.a = 0;        
//  } catch (error) {
//      console.log("exception!!!");
//  }
// });
// 2. 다른 스레드에서 발생한 에러 처리.
// uncaughtException을 사용하는 것은 조악한 예외처리 메커니즘이기 때문에 사용 자제.ㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ
process.on("uncaughtException", error => {
    console.log("uncaughtException!!");
})