
export interface Question {
  id:number
  question:string
  option: {
    a:string
    b:string
    c:string
    d:string
  }
  section:""
  answer:string
  solution:string
  selectedAnswer:string;
}

export interface QuestionList {
  data:Array<Question>
}
