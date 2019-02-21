// process.nextTick example
const foo = _ => console.log('foo');
process.nextTick(foo);
console.log('bar');

const func = callback => process.nextTick(callback, "calbackk!!!");

// process.nextTick 함수는 비동기 처리를 위해 Node.js 내부의 스레드 풀로 다른 스레드 위에서 콜백 함수를 동작한다.
// try~catch 문은 같은 스레드 위에서만 동작하기 때문에 예외 처리가 불가.
try {
    func(param => {
        a.a = 0;
    })
} catch (error) {
    console.log("exception");
}
console.log('pass');