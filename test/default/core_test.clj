(ns default.core-test
  (:require [clojure.test :refer :all]
            [default.core :refer :all]))

(deftest a-test
  (testing "A failing test"
    (is (= false true)))

  (testing "A succeeding test"
    (is (= true true))))
