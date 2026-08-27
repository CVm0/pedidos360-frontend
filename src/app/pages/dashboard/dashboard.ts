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

interface Stats {
  total: number;
  pendientes: number;
  enPreparacion: number;
  entregados: number;
  ingresos: number;
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

  protected readonly today = new Date().toLocaleDateString('es-AR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  protected readonly pedidos: Pedido[] = [
    { id: '#1042', cliente: 'Mesa 4', items: 'Milanesa napolitana x2, Papas fritas', estado: 'En preparación', total: 8400 },
    { id: '#1043', cliente: 'Delivery - Juan P.', items: 'Pizza muzzarella, Coca-Cola 1.5L', estado: 'Pendiente', total: 6200 },
    { id: '#1044', cliente: 'Mesa 2', items: 'Ensalada César, Agua mineral', estado: 'Entregado', total: 3100 },
  ];

  protected readonly stats: Stats = {
    total: 47,
    pendientes: 8,
    enPreparacion: 12,
    entregados: 27,
    ingresos: 184500,
  };

  protected estadoClase(estado: EstadoPedido): string {
    switch (estado) {
      case 'Pendiente':
        return 'badge-amber';
      case 'En preparación':
        return 'badge-sky';
      case 'Entregado':
        return 'badge-emerald';
    }
  }
}
