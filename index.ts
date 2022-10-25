// typescript 지정 가능한 타입 : string, number, boolean, bigint, null, undefined,[], {}

// 기본형 
let fullName : string = '홍길동'

// array 타입
let firstName : string[] = ['홍', '박']

// object 타입
let age : { age: number } = { age: 123 }

// 하나의 변수에 여러가지 타입이 올 경우
let twoType1 : string | number = 'name'
let twoType2 : string | number = 123

// 자주 쓰이는 타입을 변수로 저장해둘 수 있음
type nameType = string | number
let lastName : nameType = '123'

// 나만의 타입을 만들 수 도 있다. 리터럴 타입
type myType = '홍' | '박'  // '홍', '박' 만 값으로 올 수 있다.
let seong : myType = "박"

// 함수의 파라미터와 return값이 어떤 타입일지 지정할 수 있다.
// function practice(x : 파라미터타입) : 리턴타입 {}
function practice(x : number) : number {
    return x + 1
}

// 화살표 함수
const arrowFunc = (x : number) : number => x+1;

// 타입스크립트는 지금 변수의 타입이 확실하지 않으면 마음대로 연산할 수 없습니다.
// 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assertion 문법을 사용해야 허락해줍니다. 

// 에러
// function 함수명(x :number | string) {
//     return x * 2
//   }
  
// 가능
function 함수명(x :number | string) {
    if (typeof x === 'number'){
        return x * 2
    } 
}

// array 자료형에 순서를 포함해서 타입을 지정해줄 경우 tuple 타입 이용
type Member = [number, boolean];
let john:Member = [100, false]

// object 타입 정의가 너무 길 경우 type 키워드로 변수에 담아서 정의 가능
// ?를 달아주는건 선택사항임을 표시 하는 것
type MyObject = {
    name? : string,
    age : number
}
let 철수 :MyObject = { 
    name : 'kim',
    age : 50
}

// object 타입에서 전부 타입 지정 index signature 라고도 한다.
type MyObject2 = {
    [key :string] : number,
}
let 영희 : MyObject2 = { 
    age : 50,
    weight : 100,
}

// class도 타입 설정 가능 다만 중괄호 내에서 미리 변수를 선언해두고 생성자 단에서 지정해야함
class Person {
    name;
    constructor(name :string){
      this.name = name;
    }
  }