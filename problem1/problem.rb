#Problem 1:
#You will write a method in ruby that takes in a sentence as a string and returns all the letters that it is missing from the alphabet. You will ignore the case of the letters in the input sentence and any other characters that are not in the alphabet.  Your return should be all lower case characters in alphabetical order. You may use methods introduced by Rails if you wish.
#
#Your solution must conform to the following signature.
#
#Method Signature: def missing_alphas(sentence)
#
#Examples:
#
#sentence: "A lazy dog jumps over the quick brown fox."
#output: ""
#
#sentence: ""
#output: "abcdefghijklmnopqrstuvwxyz"
#
#sentence: "Let's fly to Hawaii in May!"
#output: "bcdgjkpqruvxz"

def missing_alphas(sentence)
  puts sentence
end

missing_alphas("I have never written Ruby before, but this morning I setup Ruby on Rails with Docker Compose.")