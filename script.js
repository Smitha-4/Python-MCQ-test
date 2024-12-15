const STORE = {
    questions: {
        variables: [
            {
                question: "Is Python case sensitive when dealing with identifiers?",
                code: ``,
                answers: [
                    "No",
                    "Yes",
                    "Depends on Machine",
                    "None of the above"
                ],
                correctAnswer: "No"
            },
            {
                question: "What will be the value of the following Python expression?",
                code: `4 + 75 % 25//5**2-(12/3)`,
                answers: [
                    "23",
                    "37",
                    "0",
                    "62"
                ],
                correctAnswer: "0"
            },
            {
                question: "What is the order of precedence in python?",
                code: ``,
                answers: [
                    "Exponential, Parentheses, Multiplication, Division, Addition, Subtraction",
                    "Exponential, Parentheses, Division, Multiplication, Addition, Subtraction",
                    "Parentheses, Exponential, Multiplication, Addition, Division, Subtraction",
                    "Parentheses, Exponential, Multiplication, Division, Addition, Subtraction"
                ],
                correctAnswer: "Parentheses, Exponential, Multiplication, Division, Addition, Subtraction"
            },
            {
                question: "Which of the following is true for variable names in Python?",
                code: ``,
                answers: [
                    "underscore and ampersand are the only two special characters allowed",
                    "unlimited length",
                    "all private members must have leading and trailing underscores",
                    "none of the mentioned"
                ],
                correctAnswer: "unlimited length"
            },
            {
                question: "What are the values of the following Python expressions?",
                code: `2**(3**2)
 (2**3)**2
 2**3**2`,
                answers: [
                    "512, 64, 512",
                    "512, 512, 512",
                    "64, 512, 64",
                    "64, 64, 64"
                ],
                correctAnswer: "512 64 512"
            },
            {
                question: "What will be the output of the following Python expression if x=56.236?",
                code: `print("%.2f"%x)`,
                answers: [
                    "56.236",
                    "56.23",
                    "56.0000",
                    "56.24"
                ],
                correctAnswer: "56.24"
            },
            {
                question: "What is the order of namespaces in which Python looks for an identifier?",
                code: ``,
                answers: [
                    "Python first searches the built-in namespace, then the global namespace and finally the local namespace",
                    "Python first searches the built-in namespace, then the local namespace and finally the global namespace",
                    "Python first searches the local namespace, then the global namespace and finally the built-in namespace",
                    "Python first searches the global namespace, then the local namespace and finally the built-in namespace"
                ],
                correctAnswer: "Python first searches the local namespace, then the global namespace and finally the built-in namespace"
            },
            {
                question: "What is the order of namespaces in which Python looks for an identifier?",
                code: ``,
                answers: [
                    "Python first searches the built-in namespace, then the global namespace and finally the local namespace",
                    "Python first searches the built-in namespace, then the local namespace and finally the global namespace",
                    "Python first searches the local namespace, then the global namespace and finally the built-in namespace",
                    "Python first searches the global namespace, then the local namespace and finally the built-in namespace"
                ],
                correctAnswer: "Python first searches the local namespace, then the global namespace and finally the built-in namespace"
            },
            {
                question: "What is the order of namespaces in which Python looks for an identifier?",
                code: ``,
                answers: [
                    "Python first searches the built-in namespace, then the global namespace and finally the local namespace",
                    "Python first searches the built-in namespace, then the local namespace and finally the global namespace",
                    "Python first searches the local namespace, then the global namespace and finally the built-in namespace",
                    "Python first searches the global namespace, then the local namespace and finally the built-in namespace"
                ],
                correctAnswer: "Python first searches the local namespace, then the global namespace and finally the built-in namespace"
            },
            {
                question: "What is the order of namespaces in which Python looks for an identifier?",
                code: ``,
                answers: [
                    "Python first searches the built-in namespace, then the global namespace and finally the local namespace",
                    "Python first searches the built-in namespace, then the local namespace and finally the global namespace",
                    "Python first searches the local namespace, then the global namespace and finally the built-in namespace",
                    "Python first searches the global namespace, then the local namespace and finally the built-in namespace"
                ],
                correctAnswer: "Python first searches the local namespace, then the global namespace and finally the built-in namespace"
            },

        ],
        lists: [
            {
                question: "Which of the following is not a core data type in Python programming?",
                code: ``,
                answers: [
                    "Tuples",
                    "Lists",
                    "Class",
                    "Dictionary"
                ],
                correctAnswer: "Class"
            },
            {
                question: "What will be the output of the following Python code?",
                code: `l=[1, 0, 2, 0, 'hello', '', []]
    list(filter(bool, l))`,
                answers: [
                    "[1, 0, 2, ‘hello’, ”, []]",
                    "Error",
                    "[1, 2, ‘hello’]",
                    "[1, 0, 2, 0, ‘hello’, ”, []]"
                ],
                correctAnswer: "[1, 2, ‘hello’]"
            },
            {
                question: "Which method would we use to return the value 4?",
                code: `let arr = [2,4,6,8,10]`,
                answers: [
                    "arr[4]",
                    "arr[2]",
                    "arr[3]",
                    "arr[1]"
                ],
                correctAnswer: "arr[1]"
            },
            {
                question: "How would we add a value to the end of the list?",
                code: `let arr = 
['a','b','c','d','e']`,
                answers: [
                    "arr.pop('f')",
                    "arr.append('f')",
                    "arr.add('f')",
                    "arr.push('f')"
                ],
                correctAnswer: "arr.push('f')"
            },
            {
                question: "What would we use to remove and return the last value of the list?",
                code: `let arr = 
[3,1,4,1,5,9]`,
                answers: [
                    "arr.remove(9)",
                    "arr.grep('9')",
                    "arr.shift()",
                    "arr.pop()"
                ],
                correctAnswer: "arr.pop()"
            },
            {
                question: "How would we find the length of the following list?",
                code: `let arr = 
[23,1,943,81,-52,3.14159]`,
                answers: [
                    "arr.depth()",
                    "arr.index",
                    "arr.shift()",
                    "arr.length"
                ],
                correctAnswer: "len(arr)"
            },
            {
                question: "Which index is the value 9 at in the following list?",
                code: `let arr = 
[23,1,943,81,9,3.14159]`,
                answers: [
                    "2",
                    "3",
                    "5",
                    "4"
                ],
                correctAnswer: "4"
            },
            {
                question: " What will be the value of ‘result’ in following Python program?",
                code: `list1 = [1,2,3,4]
list2 = [2,4,5,6]
list3 = [2,6,7,8]
result = list()
result.extend(i for i in list1 if i not in (list2+list3) and i not in result)
result.extend(i for i in list2 if i not in (list1+list3) and i not in result)
result.extend(i for i in list3 if i not in (list1+list2) and i not in result)`,
                answers: [
                    "[1, 3, 5, 7, 8]",
                    "[1, 7, 8]",
                    "[1, 2, 4, 7, 8]",
                    "error"
                ],
                correctAnswer: "[1, 3, 5, 7, 8]"
            },
            {
                question: " Suppose listExample is [3, 4, 5, 20, 5, 25, 1, 3], what is list1 after listExample.extend([34, 5])?",
                code: ``,
                answers: [
                    "[3, 4, 5, 20, 5, 25, 1, 3, 34, 5]",
                    "[1, 3, 3, 4, 5, 5, 20, 25, 34, 5]",
                    " [25, 20, 5, 5, 4, 3, 3, 1, 34, 5]",
                    "[1, 3, 4, 5, 20, 5, 25, 3, 34, 5]"
                ],
                correctAnswer: "[3, 4, 5, 20, 5, 25, 1, 3, 34, 5]"
            },
            {
                question: " What will be the output of the following Python code?",
                code: `myList = [1, 5, 5, 5, 5, 1]
                        max = myList[0]
                        indexOfMax = 0
                        for i in range(1, len(myList)):
                            if myList[i] > max:
                                max = myList[i]
                                indexOfMax = i
                        
                        >>>print(indexOfMax)`,
                answers: [
                    "1",
                    "2",
                    "3",
                    "3"
                ],
                correctAnswer: "1"
            },
        ],
        loops: [
            {
                question: " What will be the output of the following Python code snippet?",
                code:
                    `for i in [1, 2, 3, 4][::-1]:
        print(i, end=' ')`,
                answers: [
                    "4 3 2 1",
                    "error",
                    "1 2 3 4",
                    "none"
                ],
                correctAnswer: "4 3 2 1"
            },
            {
                question: " What will be the output of the following Python code?",
                code:
                    `x = 'abcd'
    for i in x:
        print(i.upper())`,
                answers: [
                    "a B C D",
                    "A B C D",
                    "a b c d",
                    "error"
                ],
                correctAnswer: "error"
            },
            {
                question: " What will be the output of the following Python code?",
                code: `i = 5
                while True:
                    if i%0O11 == 0:
                        break
                    print(i)
                    i += 1`,
                answers: [
                    "5 6 7 8 9 10",
                    "5 6 7 8",
                    "5 6",
                    "error"
                ],
                correctAnswer: "5 6 7 8"
            },
            {
                question: "What will be the output of the following Python code?",
                code: `i = 0
                    while i < 5:
                        print(i)
                        i += 1
                        if i == 3:
                            break
                    else:
                        print(0)`,
                answers: [
                    "0 1 2 0",
                    "error",
                    "0 1 2",
                    "none of the mentioned"
                ],
                correctAnswer: "0 1 2"
            },
            {
                question: "What will be the output of the following Python code?",
                code:
                    `i = 0
                    while i < 3:
                    print(i)
                    i += 1
                    else:
                    print(0)`,
                answers: [
                    "0 1 2 3 0",
                    " 0 1 2 0",
                    " 0 1 2",
                    "error"
                ],
                correctAnswer: "0 1 2 0"
            },
            {
                question: "What will be the output of the following Python code?",
                code:
                    `for i in range(2.0):
                        print(i)`,
                answers: [
                    "0.0 1.0",
                    "0 1",
                    "error",
                    "none of the mentioned"
                ],
                correctAnswer: "error"
            },
            {
                question: "What will be the output of the following Python code?",
                code:
                    `for i in range(10):
                        if i == 5:
                            break
                        else:
                            print(i)
                    else:
                        print("Here")`,
                answers: [
                    "0 1 2 3 4 Here",
                    "0 1 2 3 4 5 Here",
                    "0 1 2 3 4",
                    "1 2 3 4 5"
                ],
                correctAnswer: "0 1 2 3 4"
            },
            {
                question: "What will be the output of the following Python code?",
                code:
                    `a = [0, 1, 2, 3]
                    i = -2
                    for i not in a:
                        print(i)
                        i += 1`,
                answers: [
                    "-2 -1",
                    "0",
                    "error",
                    "none of the mentioned"
                ],
                correctAnswer: "error"
            },
            {
                question: "What will be the output of the following Python code?",
                code:
                    `x = 'abcd'
                    for i in range(len(x)):
                        print(i)`,
                answers: [
                    "0 1 2 3",
                    "a b c d",
                    "error",
                    "1 2 3 4"
                ],
                correctAnswer: "0 1 2 3"
            },
            {
                question: "What will be the output of the following Python code?",
                code:
                    `i = 1
                    while True:
                        if i%3 == 0:
                            break
                        print(i)
                    
                        i + = 1`,
                answers: [
                    "1 2",
                    "1 2 3",
                    "error",
                    "none of the mentioned"
                ],
                correctAnswer: "error"
            }

        ],
        functions: [
            {
                question: "The following python program can work with ____ parameters.",
                code: `def f(x):
        def f1(*args, **kwargs):
               print("Sanfoundry")
               return x(*args, **kwargs)
        return f1`,
                answers: [
                    "any number of",
                    "0",
                    "1",
                    "2"
                ],
                correctAnswer: "any number of"
            },
            {
                question: "What will be the output of the following Python function?",
                code: `min(max(False,-3,-4), 2,7)`,
                answers: [
                    "-4",
                    "-3",
                    "2",
                    "False"
                ],
                correctAnswer: "False"
            },
            {
                question: "What will be the output of the following Python code?",
                code:
                    `print("abc. DEF".capitalize())`,
                answers: [
                    "ABC. def",
                    "abc. def",
                    "AbC. DEf",
                    "abC. dEf"
                ],
                correctAnswer: "ABC. def"
            },
            {
                question: " What will be the output of the following Python program?",
                code: `def foo(x):
                        x[0] = ['def']
                        x[1] = ['abc']
                        return id(x)
                    q = ['abc', 'def']
                    print(id(q) == foo(q))`,
                answers: [
                    'Error',
                    'None',
                    ' False',
                    ' True'
                ],
                correctAnswer: 'True'
            },
            {
                question: "What will be the output of the following Python code?",
                code:
                    `print("abc. DEF".capitalize())`,
                answers: [
                    "ABC. def",
                    "abc. def",
                    "AbC. DEf",
                    "abC. dEf"
                ],
                correctAnswer: "ABC. def"
            },
            {
                question: "What will be the output of the following Python code?",
                code:
                    `def addItem(listParam):
                            listParam += [1]
                        
                        mylist = [1, 2, 3, 4]
                        addItem(mylist)
                        print(len(mylist))`,
                answers: [
                    "5",
                    "8",
                    "2",
                    "1"
                ],
                correctAnswer: "5"
            },
            {
                question: " What will be returned after calling modulus(100,95) and modulus(95.3,100.5) and modulus(12,12)?",
                code:
                    `def modulus(num1, num2):
                            answer = num1 % num2
                            return answer`,
                answers: [
                    "A. 5 and 5.2 and 1",
                    "100 and 95.3 and 12",
                    "95 and 100.5 and 0",
                    "5 and 95.3 and 0"
                ],
                correctAnswer: "5 and 95.3 and 0"
            },
            {
                question: "After running the following code, what will the output be?",
                code:
                    `def multiplication_one(num1, num2):
                            num1 * num2

                        print(multiplication_one(5, 10))

                        def multiplication_two(num1, num2):
                            return num1 * num2

                        multiplication_two(5, 10)`,
                answers: [
                    "None will be outputted after printing and calling multiplication_one(5, 10). Nothing will be outputted after calling multiplication_two(5, 10)",
                    "50 will be outputted after printing and calling multiplication_one(5, 10) and after calling multiplication_two(5, 10)",
                    " None will be outputted after printing and calling multiplication_one(5, 10). 50 will be outputted after calling multiplication_two(5, 10).",
                    "50 will be outputted after printing and calling multiplication_one(5, 10). Nothing will be outputted after calling multiplication_two(5, 10)."
                ],
                correctAnswer: "5"
            },
            {
                question: "What will be the output of the following Python code?",
                code:
                    `def addition(num1, num2):
                            return(num1 + num2)

                        def subtraction(num1, num2):
                            print(num1 - num2)

                        def main():
                            add_answer = addition(2, 4)
                            new_add_answer = addition(add_answer, 105)
                            print(subtraction(new_add_answer, 200)))`,
                answers: [
                    "None and -89",
                    "None",
                    "-89",
                    "-89 and None"
                ],
                correctAnswer: "-89 and None"
            },
            {
                question: "What will be printed after calling divide(100, 95) and divide(5, 7) and divide(7, 5)?",
                code:
                    `def divide(num1, num2):
                            single_div_answer = num1 / num2
                            print(round(single_div_answer, 2))
                            double_div_answer = num1 // num2
                            print(round(double_div_answer, 2))`,
                answers: [
                    "A. 1, 1.05, 0, 0.71, 1, 1.4",
                    "1.05, 2, 0.71, 1, 1.4, 2",
                    "1.05, 1, 0.71, 1, 1.4, 1",
                    "1.05, 1, 0.71, 0, 1.4, 1"
                ],
                correctAnswer: "1.05, 1, 0.71, 0, 1.4, 1"
            },
        ],
        dictionaries: [
            {
                question: "Which of these about a dictionary is false?",
                code: ``,
                answers: [
                    "The values of a dictionary can be accessed using keys",
                    "The keys of a dictionary can be accessed using values",
                    "Dictionaries aren’t ordered",
                    "Dictionaries are mutable"
                ],
                correctAnswer: "The keys of a dictionary can be accessed using values"
            },
            {
                question: "What will be the output of the following Python code snippet?",
                code: `a={1:"A",2:"B",3:"C"}
                        for i,j in a.items():
                            print(i,j,end=" ")`,
                answers: [
                    "1 A 2 B 3 C",
                    "1 2 3",
                    "A B C",
                    "1:”A” 2:”B” 3:”C”"
                ],
                correctAnswer: "1 A 2 B 3 C"
            },
            {
                question: "What will be the output of the foloowing code?",
                code: `a={1:"A",2:"B",3:"C"}
                        print(a.get(1,4))`,
                answers: [
                    "1",
                    "A",
                    "4",
                    "Syntax error"
                ],
                correctAnswer: "set()"
            },
            {
                question: " What will be the output of the following Python code?",
                code: `a={1:"A",2:"B",3:"C"}
                        b={4:"D",5:"E"}
                        a.update(b)
                        print(a)`,
                answers: [
                    "{1: ‘A’, 2: ‘B’, 3: ‘C’}",
                    "Method update() doesn’t exist for dictionaries",
                    "{1: ‘A’, 2: ‘B’, 3: ‘C’, 4: ‘D’, 5: ‘E’}",
                    "{4: ‘D’, 5: ‘E’}"
                ],
                correctAnswer: "{1: ‘A’, 2: ‘B’, 3: ‘C’, 4: ‘D’, 5: ‘E’}"
            },
            {
                question: "What will be the output of the following Python code?",
                code: `a={1:"A",2:"B",3:"C"}
                        b=a.copy()
                        b[2]="D"
                        print(a)`,
                answers: [
                    "Error, copy() method doesn’t exist for dictionaries",
                    "{ 1: ‘A’, 2: ‘B’, 3: ‘C’}",
                    "{ 1: ‘A’, 2: ‘D’, 3: ‘C’ }",
                    "“None” is printed",
                ],
                correctAnswer: "set()"
            },
            {
                question: " If a is a dictionary with some key-value pairs, what does a.popitem() do?",
                code: ``,
                answers: [
                    "Removes an arbitrary element",
                    "Removes all the key-value pairs",
                    "Removes the key-value pair for the key given as an argument",
                    "Invalid method for dictionary"
                ],
                correctAnswer: "Removes an arbitrary element"
            },
            {
                question: "What is output of print(math.pow(3, 2))?",
                code: ``,
                answers: [
                    "9.0",
                    "None",
                    "9",
                    "12"
                ],
                correctAnswer: "9.0"
            },
            {
                question: " What will be the output of the following Python expression?",
                code: `round(4.576)`,
                answers: [
                    "4",
                    "4.6",
                    "5",
                    "4.5"
                ],
                correctAnswer: "5"
            },
                        {
                question: "Which of the following is not a declaration of the dictionary?",
                code: ``,
                answers: [
                    "{1: ‘A’, 2: ‘B’}",
                    "dict([[1,”A”],[2,”B”]])",
                    "{1,”A”,2”B”}",
                    "{ }"
                ],
                correctAnswer: "{1,”A”,2”B”}"
            },

        ],

        conditionals: [
            {
                question: "What will be the output of the following code snippet?",
                code: `x = 5
                        if x > 0:
                        print("Positive")
                        else:
                        print("Negative")`,
                answers: [
                    "Positive",
                    "Negative",
                    "Zero",
                    "error"
                ],
                correctAnswer: "Positive"
            },
            {
                question: "How do you represent the logical AND operator in Python?",
                code: ``,
                answers: [
                    "&&",
                    "and",
                    "AND",
                    "all of the above"
                ],
                correctAnswer: "all of the above"
            },
            {
                question: "What is the output of the following code snippet?",
                code: `x = 10
                        if x > 5:
                        print("Greater than 5")
                        elif x > 8:
                        print("Greater than 8")
                        else:
                        print("Less than or equal to 5")`,
                answers: [
                    "Greater than 5",
                    "NeGreater than 8",
                    "Less than or equal to 5",
                    "No output"
                ],
                correctAnswer: "Positive"
            },
        ],

    }
};


// Make the quiz. Create a model for our app's state
function makeQuiz() {
    // Creating an object to store the app's state when beginning the quiz
    return {
        // Gathering a random question out of the available questions for each category
        questions: helpers.getRandomQuestions(STORE),
        // Boolean for if the quiz is in progress or not
        midQuiz: false,
        // Array of correct/incorrect answers to use for our progress bar
        progress: {
            progressBar: [],
            incorrectCategories: []
        },
        // Boolean to determine if the end state should display
        completed: false,
        // Monitoring which question we are currently on
        currentQuestion: 0,
        // Keeps track of total correct answers
        correctAnswers: 0,
        // Keeps current selected answer
        currentAnswer: "",
        // Keeps track of % completed
        percCorrect: 0
    }
}

// Apply fadeOut animations and set the stage for DOM text/element changes
function $fade(appState) {

    // This is the completed state of of a quiz
    if (appState.completed) {

        // Fade out elements with a promise to avoid choppy behavior
        $.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
            .done(function () {

                // Display results of the quiz
                $showResults(appState);
                $('.results-wrapper').hide().removeClass('hide');
                $('.question-answer-wrapper, .results-wrapper').fadeIn(500);
            });

        // This is if the app is just starting
    } else if (appState.midQuiz === false) {

        // Set a flag that the app has begun
        appState.midQuiz = true;
        // Fade out elements with a promise to avoid choppy behavior
        $.when($('.question-answer-wrapper, .question-wrapper, .code, .answer-wrapper, .start-quiz, .quit-quiz, .results-wrapper, .progress, .progress-bar').fadeOut(500))
            .done(function () {
                // Remove any progress from a previous quiz (if any);
                helpers.updateProgressBar(appState);
                $('.progress-count').html('1 / 10');
                $('.progress-perc').html('');
                // Kill previous results
                $('.failures').remove();
                // Lots to do... mostly just setting up a new environment for a new quiz
                $updateQuestion(appState);
                $('progress-bar').empty();
                $('progress-fill').html('Progress: <span class="progress-count">1 / 10</span><span class="progress-perc"></span>');
                $('.question-answer-wrapper, .answer-wrapper').removeClass('begin');
                $('.submit-btn, .progress, .progress-bar').removeClass('hide');
                $('.progress, .progress-bar').hide();
                $('.question-answer-wrapper, .question-wrapper, .answer-wrapper, .progress, .progress-bar').fadeIn(500);
                if (!$('.code').hasClass('hide')) { $('.code').fadeIn(500) };
            });

        // This is if the app is in the middle of execution
    } else if (appState.midQuiz) {
        $.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
            .done(function () {
                $updateQuestion(appState);
                $('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeIn(500);
            });
    }
}

// Work in progress...
function $showResults(appState) {
    if (appState.correctAnswers === 10) {
        let endMsg = `You got ${appState.percCorrect}% correct!
I have nothing else to teach you. Move on and prosper!
`;
    } else {
        $('.answer-btn').remove();
        let endMsg = `You got ${appState.percCorrect}% correct!`
        let endFeedback = ``;
        if (appState.progress.incorrectCategories.length === 0) {
            endFeedback = `You aced it! Good job!`;
        } else {
            endFeedback = `You may want to study up on the following categories:`;
        }

        $('.quiz-end-score').html(endMsg);
        let $failList = $('<ul class="failures"></ul>');
        appState.progress.incorrectCategories.map((cat => {
            $failList.append("<li class='category'>" + cat + "</li>");
        }));
        $('.quiz-end-feedback-p').html(endFeedback);
        $('.quiz-end-categories').append($failList);
        $('.results-wrapper').removeClass('hide').css('display', 'flex');
        $('.question-answer-wrapper, .results-wrapper, .quiz-end-feedback, .quiz-end-score, .retry-btn').css('display', 'flex').fadeIn(500);
    }

}

// Update the question, code, answers, buttons in the DOM while we're in a faded out state
function $updateQuestion(appState) {
    $('.answer-btn').remove();

    // Update the question and code text with the current question
    $('.question').html(appState.questions[appState.currentQuestion].question);

    // This is a hack to hide/show the code portion
    // Only 1/3 of the questions contain code so we hide it if they aren't present
    if (appState.questions[appState.currentQuestion].code == ``) {
        $('.code').addClass('hide');
    } else {
        $('.code').removeClass('hide');
        $('.code').html(`<pre>${appState.questions[appState.currentQuestion].code}</pre>`);
    }

    // Change continue back to submit
    $('.continue-btn')
        .val("Submit")
        .removeClass('continue-btn')
        .addClass('submit-btn')
        .prop('disabled', true);

    // Add in available answers for the question
    let $answers = [];

    // Adding the answers to a temporary array
    for (let i = 0; i < appState.questions[appState.currentQuestion].answers.length; i++) {

        // Add current question answers to an array
        let $answer = $('<button class="answer-btn" type="button"></button>');
        $answer.html(appState.questions[appState.currentQuestion].answers[i]);
        $answers.push($answer);
    }

    // Shuffle the answers
    helpers.shuffleAnswers($answers)

    // Push answers to the DOM
    $answers.forEach((answer) => {
        $('.answer-wrapper').prepend(answer);
    });
}

// Simple class and enable/disable DOM selection when answer is selected
function selectAnswer(answer) {
    $('.answer-btn').removeClass('selected');
    answer.addClass('selected');
    $('.submit-btn').prop('disabled', false);
}

// Answer is selected and submitted
// Push a feedback state
function submitAnswer(appState) {

    // This will be returned true or false based on their answer
    let correct;

    // Add styles to the answers to show if their answer was correct or not
    $('.answer-btn').each(function () {
        if ($(this).html() === appState.questions[appState.currentQuestion].correctAnswer) {
            $(this).addClass('pass');
            // If answer is correct and selected...
            if ($(this).hasClass('selected')) {
                correct = "pass";
                appState.correctAnswers++;
                appState.questions[appState.currentQuestion];
            }

            // Handle correct answer if selected answer is incorrect
        } else if ($(this).hasClass('selected')) {
            $(this).addClass('fail dim-answer');
            correct = "fail";
            appState.progress.incorrectCategories.push(appState.questions[appState.currentQuestion].category);

            // Dim the other answers to make the correct one more prevalent
        } else {
            $(this).addClass('dim-answer');
        }
    });

    // Add a progress bar indicator to our appState object
    appState.progress.progressBar.push(`<div class="progress-indicator ${correct}"></div>`);

    // Update our percent correct (parse a float and set it to a fixed percentage)
    appState.percCorrect = parseFloat(appState.correctAnswers / (appState.currentQuestion + 1) * 100).toFixed();

    // Update our current question VS total quiz length
    $('.progress-count').html(`
		${appState.currentQuestion + 1} / ${appState.questions.length}
	`);

    // Update our current correct percentage
    $('.progress-perc').html(`
		 // ${(appState.percCorrect)}% Correct
	`)

    // Change submit back to continue
    $('.submit-btn')
        .val("Continue")
        .removeClass('submit-btn')
        .addClass('continue-btn')

    // Disable selecting answers
    $('.answer-btn').prop("disabled", true);

    // Update our progress-bar DOM
    helpers.updateProgressBar(appState);

    // Continue to next question
    appState.currentQuestion++;

    // Verify if we're done or not
    if (appState.currentQuestion === appState.questions.length) {
        appState.completed = true;
    }

}

// Silly easter egg for saying you don't want to do the quiz
function killQuiz() {
    $('.start-quiz, .quit-quiz').hide();
    let failureMsg = "You didn't grow. You didn't improve. You took a shortcut and gained nothing. You experienced a hollow victory. Nothing was risked and nothing was gained. It's sad you don't know the difference..."
    let msgSplit = failureMsg.split(" ");
    let counter = 0;
    $('.question').empty();
    let startTroll = setInterval(function () {
        $('.question').append(msgSplit[counter] + " ");
        counter++;
        if (counter > msgSplit.length - 1) {
            clearInterval(startTroll);
            $('.start-quiz').text('You can do it! Start Quiz').fadeIn(500);
        }
    }, 250);
}

// These are simple algorithms to modify data that don't need an individual function
let helpers = {
    // Pick a random question from the available ones
    pickRandomQ: function (obj, section) {
        return Math.floor(Math.random() * obj.questions[section].length);
    },
    // Gather a random question from every category
    getRandomQuestions: function (obj) {
        let questions = [];
        let categories = Object.keys(obj.questions);
        categories.forEach((cat) => {
            let randomQ = this.pickRandomQ(obj, cat);
            let question = obj.questions[cat][randomQ];
            question.category = cat;
            questions.push(question);
        });
        return questions;
    },
    // Shuffle the answers so they don't appear in the same order
    shuffleAnswers: function (arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    },
    // Update progress bar DOM element
    updateProgressBar: function (appState) {
        $('.progress-bar').empty();
        appState.progress.progressBar.forEach((progInd => {
            $('.progress-bar').append(progInd);
        }))
    }
}

// Lets start the show
$(function () {

    // Kill any form refresh
    $('.answer-wrapper').on('submit', function (e) {
        e.preventDefault();
    });

    // Storage for quiz app state
    let quizData;

    // Start quiz
    $('.start-quiz, .retry-btn').on('click', function () {
        quizData = makeQuiz();
        $fade(quizData);
    });

    // Select an answer
    $('.question-answer-wrapper').on('click', '.answer-btn', function () {
        selectAnswer($(this));
    })

    // Submit your answer to display feedback and advance question counter
    $('.question-answer-wrapper').on('click', '.submit-btn', function (e) {
        submitAnswer(quizData);
    });

    // Submit your answer to display feedback and advance question counter
    $('.question-answer-wrapper').on('click', '.continue-btn', function () {
        $fade(quizData);
    });

    // Easter egg to chastize the user
    $('.quit-quiz').on('click', function () {
        killQuiz();
    })
})
