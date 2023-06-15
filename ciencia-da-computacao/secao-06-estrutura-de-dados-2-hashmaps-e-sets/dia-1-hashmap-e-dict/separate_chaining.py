# Problema: Quando duas chaves diferentes resultam no mesmo address do hashMap
# refatorando a classe HashMap para resolver esse problema

class Employee:
    def __init__(self, id_num, name) -> None:
        self.id_num = id_num
        self.name = name

    def __str__(self) -> str:
        return f'id: {self.id_num}, name: {self.name}'


class HashMap:
    def __init__(self) -> None:
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            print('get_value address', item)
            if item.id_num == id_num:
                return item.name
        return None

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                item.name = new_name


if __name__ == "__main__":
    employees = [(14, "name1"), (23, "name2"), (10, "name3"), (33, 'teste')]
    hash_map = HashMap()

    for id_num, name in employees:
        hash_map.insert(Employee(id_num, name))

    print(hash_map.get_value(33))
    print(hash_map.has(33))
    hash_map.update_value(33, 'name33')
    print(hash_map.get_value(33))
