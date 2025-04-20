package consumer

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/segmentio/kafka-go"
)

func StartConsumer(broker, topic, groupID, name string) {
	r := kafka.NewReader(kafka.ReaderConfig{
		Brokers:        []string{broker},
		GroupID:        groupID,
		Topic:          topic,
		MinBytes:       10e3,
		MaxBytes:       10e6,
		CommitInterval: time.Second,
	})

	go func() {
		for {
			m, err := r.ReadMessage(context.Background())
			if err != nil {
				log.Printf("[%s] Error reading: %v", name, err)
				continue
			}
			fmt.Printf("[%s] Received: %s => %s\n", name, string(m.Key), string(m.Value))
		}
	}()
}