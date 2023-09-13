import { assertEquals } from "https://deno.land/std@0.201.0/assert/mod.ts";

Deno.test(function test_succeeds() {
  assertEquals(true, true);
});

Deno.test(function test_fails() {
  assertEquals(true, false);
});
