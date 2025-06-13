import { assertEquals } from "https://deno.land/std/assert/mod.ts";

Deno.test(function test_succeeds() {
  assertEquals(true, true);
});

Deno.test(function test_fails() {
  assertEquals(true, false);
});
