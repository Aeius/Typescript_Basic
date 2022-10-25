// typescript 지정 가능한 타입 : string, number, boolean, bigint, null, undefined,[], {}
// 기본형 
var fullName = '홍길동';
// array 타입
var firstName = ['홍', '박'];
// object 타입
var age = { age: 123 };
// 하나의 변수에 여러가지 타입이 올 경우
var twoType1 = 'name';
var twoType2 = 123;
var lastName = '123';
var seong = "박";
// 함수의 파라미터와 return값이 어떤 타입일지 지정할 수 있다.
// function practice(x : 파라미터타입) : 리턴타입 {}
function practice(x) {
    return x + 1;
}
// 화살표 함수
var arrowFunc = function (x) { return x + 1; };
// 타입스크립트는 지금 변수의 타입이 확실하지 않으면 마음대로 연산할 수 없습니다.
// 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용해야 허락해줍니다. 
// 에러
// function 함수명(x :number | string) {
//     return x * 2
//   }
// 가능
function 함수명(x) {
    if (typeof x === 'number') {
        return x * 2;
    }
}
var john = [100, false];
var 철수 = {
    name: 'kim',
    age: 50
};
var 영희 = {
    age: 50,
    weight: 100,
};
// class도 타입 설정 가능 다만 중괄호 내에서 미리 변수를 선언해두고 생성자 단에서 지정해야함
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
