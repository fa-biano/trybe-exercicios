# Você tem a implementação de uma classe capaz de renderizar imagens através
# de uma interface que utiliza o método draw. Porém, no momento ela só suporta
# formato PNG e você também precisa ser capaz de renderizar imagens em SVG.
# Altere o código, sem modificar a classe SvgImage, para que isso seja possível


from abc import ABC, abstractmethod


class PngInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class PngImage(PngInterface):
    def __init__(self, png_path):
        self.png_path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.png_path} with {self.format}")


class SvgImage:
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def get_image(self):
        return f"SVG {self.svg_path} with {self.format}"


# ##### Solução #####
class SvgAdapter(PngInterface):
    def __init__(self, svg):
        self.svg = svg

    def draw(self):
        print(f"Drawing {self.svg.get_image()}")


SvgAdapter(SvgImage('fake_path')).draw()
