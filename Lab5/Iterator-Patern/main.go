package main

import "fmt"

// Aggregate interface
type Aggregate interface {
	CreateIterator() Iterator
}

// Iterator interface
type Iterator interface {
	HasNext() bool
	Next() interface{}
}

// ConcreteAggregate
type Collection struct {
	items []string
}

func (c *Collection) CreateIterator() Iterator {
	return &CollectionIterator{
		collection: c,
		index:      0,
	}
}

// ConcreteIterator
type CollectionIterator struct {
	collection *Collection
	index      int
}

func (ci *CollectionIterator) HasNext() bool {
	return ci.index < len(ci.collection.items)
}

func (ci *CollectionIterator) Next() interface{} {
	if ci.HasNext() {
		item := ci.collection.items[ci.index]
		ci.index++
		return item
	}
	return nil
}

func main() {
	collection := &Collection{
		items: []string{"Item1", "Item2", "Item3", "Item4"},
	}

	iterator := collection.CreateIterator()

	for iterator.HasNext() {
		fmt.Println(iterator.Next())
	}
}