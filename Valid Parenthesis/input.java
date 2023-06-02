class Solution {
    public boolean isValid(String s) {
        Stack<Character> input = new Stack<>();
        for (char i : s.toCharArray()) {
            if (i == '{' || i == '[' || i == '(') {
                input.push(i);
            } else {
                if (input.isEmpty()) {return false;}
                if (i == '}' && input.peek() == '{') {
                    input.pop();
                } else if (i == ']' && input.peek() == '[') {
                    input.pop();
                } else if (i == ')' && input.peek() == '(') {
                    input.pop();
                } else {
                    return false;
                }          
            }

        }
        return input.empty();
    }
}