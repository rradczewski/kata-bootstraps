package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFails(t *testing.T) {

	// assert equality
	assert.Equal(t, false, true, "Test should fail")

}

func TestSucceeds(t *testing.T) {

	// assert equality
	assert.Equal(t, true, true, "Test should succeed")

}
