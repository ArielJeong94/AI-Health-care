def count_up():
    i = 0
    while True:
        yield i
        i += 1
        
# 리스트 <-> 제너레이터 차이
"""
	리스트: 모든 요소를 전부 메모리에 올려둠
	제너레이터: 그때 그때 필요한 요소만 가져옴
"""

import sys

# List Comprehension 사용
def get_squares_list(n):
    return [x**2 for x in range(n)]

# Generator 사용
def get_squares_gen(n):
    return (x**2 for x in range(n))

# 메모리 사용량 비교
n = 1000000
list_result = get_squares_list(n)
gen_result = get_squares_gen(n)

print(f"\n메모리 사용량 비교 (n={n}):")
print(f"  List: {sys.getsizeof(list_result)} bytes")
print(f"  Generator: {sys.getsizeof(gen_result)} bytes")
