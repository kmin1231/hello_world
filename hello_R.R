hello_list <- list("Hello", "world")

# Attention: index starts from '1', not '0'
# Attention: use [[1]] to access the first element in a list
# cf. [1] returns a subset of the 'list'

cat(hello_list[[1]], ", ", hello_list[[2]], "!", "\n", sep="")
