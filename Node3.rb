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
node1.next_node = node3

def detect_cycle(list)
  tortoise = list #node1
  hare = list #node1

  while list 
    if hare.next_node == nil
      return puts "No Loop Found"
    else 
      hare = hare.next_node
      if hare.next_node == nil
        return puts "No Loop Found" 
      end
    end

    hare = hare.next_node
    tortoise = tortoise.next_node

    if hare == tortoise
      return puts "Loop Found"
    end
  end
end

detect_cycle(node3)