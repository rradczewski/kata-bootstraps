package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFails(t *testing.T) {
	assert.False(t, BoolFunc(), "Test should fail")
}

func TestSucceeds(t *testing.T) {
	assert.Equal(t, "world", Hello(), "Test should succeed")
}
