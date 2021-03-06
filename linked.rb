class LinkedListNode
  attr_accessor :value, :next_node

  def initialize(value, next_node=nil)
    @value = value
    @next_node = next_node
  end
end

def print_values(list_node)
  if list_node
    print "#{list_node.value} --> "
    print_values(list_node.next_node)
  else
    print "nil\n"
    return
  end
end

node1 = LinkedListNode.new(37)
node2 = LinkedListNode.new(99, node1)
node3 = LinkedListNode.new(12, node2)

print_values(node3)

puts "-------"

#print_values(revlist) #=> revlist = node1

class Stack
  attr_reader :data

  def initialize
    @data = nil
  end

  # Push a value onto the stack
  def push(value)
    # create new LinkedListNodes using the value passed in
    @data = LinkedListNode.new(value, @data)
end

  # Pop an item off the stack.
  # Remove the last item that was pushed onto the
  # stack and return the value to the user
  def pop
      # I RETURN A VALUE
  end
end

  def reverse_list(list, previous=nil)
  new_head = list.next_node
  list.next_node = previous
  if new_head
    reverse_list(new_head, list)
  else
    list
  end
end
  
revlist = reverse_list(node3)
print_values(revlist)






