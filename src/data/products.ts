export interface Product {
    id: string;
    imageUrl?: string;
    rating: number;
    reviewCount: number;
    name: string;
    price: number;

}

export async function getProducts(): Promise<Product[]> {
    // await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula um atraso na resposta

    return [
        { id: '200', rating: 4.5, reviewCount: 120, name: 'Camisa Casual Azul', price: 29.99 },
        { id: '201', rating: 3.8, reviewCount: 45, name: 'Calça Jeans Slim', price: 49.99 },
        { id: '202', rating: 5.0, reviewCount: 200, name: 'Vestido Floral', price: 89.99 },
        { id: '203', rating: 4.2, reviewCount: 67, name: 'Jaqueta de Couro', price: 19.99 },
        { id: '204', rating: 3.5, reviewCount: 30, name: 'Saia Plissada', price: 39.99 },
        { id: '205', rating: 4.0, reviewCount: 85, name: 'Camisa de Linho', price: 25.49 },
        { id: '206', rating: 4.7, reviewCount: 150, name: 'Blazer Clássico', price: 59.99 },
        { id: '207', rating: 3.9, reviewCount: 50, name: 'Shorts de Verão', price: 32.99 },
        { id: '208', rating: 4.6, reviewCount: 90, name: 'Suéter de Lã', price: 79.99 },
        { id: '209', rating: 3.7, reviewCount: 40, name: 'T-shirt Estampada', price: 21.99 },
        { id: '210', rating: 4.4, reviewCount: 110, name: 'Camisa Polo', price: 45.00 },
        { id: '211', rating: 4.1, reviewCount: 70, name: 'Blusa de Manga Longa', price: 27.50 },
        { id: '212', rating: 4.8, reviewCount: 180, name: 'Casaco de Inverno', price: 95.00 },
        { id: '213', rating: 3.6, reviewCount: 25, name: 'Macacão Jeans', price: 19.49 },
        { id: '214', rating: 4.3, reviewCount: 65, name: 'Cardigan Tricotado', price: 33.99 },
        { id: '215', rating: 3.9, reviewCount: 35, name: 'Regata Básica', price: 22.49 },
        { id: '216', rating: 4.7, reviewCount: 140, name: 'Camisa de Seda', price: 68.99 },
        { id: '217', rating: 4.2, reviewCount: 55, name: 'Casaco de Tricô', price: 42.00 },
        { id: '218', rating: 3.8, reviewCount: 80, name: 'Saia Midi', price: 31.99 },
        { id: '219', rating: 4.9, reviewCount: 210, name: 'Vestido de Seda', price: 88.00 }
    ];
}
