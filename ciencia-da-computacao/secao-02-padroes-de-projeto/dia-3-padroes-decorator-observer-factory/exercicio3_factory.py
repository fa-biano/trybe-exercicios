# Você recebeu um convite para atualizar um sistema interno de uma empresa.
# Esse sistema atende os setores de vendas, financeiro e suporte. Para
# respeitar a nova Lei Geral de Proteção de Dados, a empresa precisa
# garantir que as informações internas serão expostas somente a quem
# tem necessidade. Assim devemos ter os seguintes perfis de acesso:

# Conta de Suporte: Acesso apenas ao sistema de suporte
# Conta de Suporte e Vendas: Acesso aos sistemas vendas e suporte
# Conta de Gerente: Acesso a todos os sistemas vendas, financeiro e suporte

from abc import ABC, abstractmethod


class SystemAcess(ABC):
    @abstractmethod
    def __init__(self, can_access=False) -> None:
        raise NotImplementedError

    def set_permission(self, can_access):
        raise NotImplementedError


class SupportSystemAcess(SystemAcess):
    def __init__(self, can_access=False) -> None:
        self.name = 'Support'
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class FinanceSystemAccess(SystemAcess):
    def __init__(self, can_access=False) -> None:
        self.name = 'Finance'
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class SalesSystemAccess(SystemAcess):
    def __init__(self, can_access=False) -> None:
        self.name = 'Sales'
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class Account(ABC):
    def __init__(self, username) -> None:
        self.username = username
        self.permissions = []
        self.create_account()

    @abstractmethod
    def create_account(self):
        raise NotImplementedError

    def show_permissions(self):
        permissions_name = [
            permission.name
            for permission in self.permissions
        ]

        return permissions_name

    def add_permissions(self, permission):
        self.permissions.append(permission)


class SupportAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAcess(True))


class ManagerAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAcess(True))
        self.add_permissions(FinanceSystemAccess(True))
        self.add_permissions(SalesSystemAccess(True))


class SupportSalerAccount(Account):
    def create_account(self):
        self.add_permissions(SupportSystemAcess(True))
        self.add_permissions(SalesSystemAccess(True))


if __name__ == "__main__":
    print("Qual o nome da pessoa que deseja criar?")
    name = input()
    print("Escolha qual código do perfil que deseja criar:")
    account_type = input(
        "\n1 - Suporte\n2 - Gerente\n3 - Vedendas & Suporte\n"
    )
    if account_type == "1":
        account = SupportAccount(name)
    elif account_type == "2":
        account = ManagerAccount(name)
    elif account_type == "3":
        account = SupportSalerAccount(name)

    print(f"\nCriando a conta para {account.username}.")
    print(f"Acesso liberado para os sistemas: {account.show_permissions()}")
