import { Component, inject } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

type EstadoPedido = 'Pendiente' | 'En preparación' | 'Entregado';

interface Pedido {
  id: string;
  cliente: string;
  items: string;
  estado: EstadoPedido;
  total: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private authService = inject(MsalService);

  protected readonly userName =
    this.authService.instance.getActiveAccount()?.name ?? 'usuario';

  // Datos de ejemplo: orders-inventory-service todavía no expone un endpoint
  // de pedidos consumible desde el front, así que por ahora se muestran mocks.
  protected readonly pedidos: Pedido[] = [
    { id: '#1042', cliente: 'Mesa 4', items: 'Milanesa napolitana x2, Papas fritas', estado: 'En preparación', total: 8400 },
    { id: '#1043', cliente: 'Delivery - Juan P.', items: 'Pizza muzzarella, Coca-Cola 1.5L', estado: 'Pendiente', total: 6200 },
    { id: '#1044', cliente: 'Mesa 2', items: 'Ensalada César', estado: 'Entregado', total: 3100 },
  ];

  protected estadoClase(estado: EstadoPedido): string {
    switch (estado) {
      case 'Pendiente':
        return 'bg-amber-100 text-amber-800';
      case 'En preparación':
        return 'bg-sky-100 text-sky-800';
      case 'Entregado':
        return 'bg-emerald-100 text-emerald-800';
    }
  }
}
