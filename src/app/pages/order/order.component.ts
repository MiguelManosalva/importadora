import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  
  orden: any[] = [
    {
      key: `1`,
      numeroPedido: '5555',
      estado: 'En camino',
      total: '$50000',
      children: [
        {
          key: `1-1`,
          numeroPedido: 'Producto 1',
          estado: 2,
          total: '$31000'
        },
        {
          key: `1-2`,
          numeroPedido: 'Producto 2',
          estado: 1,
          total: '$6000',
        },
        {
          key: `1-3`,
          numeroPedido: 'Producto 3',
          estado: 1,
          total: '$8000'
        }
      ]
    }
  ];
  mapOfExpandedData: { [key: string]: any[] } = {};

  collapse(array: any[], data: any, $event: boolean): void {
    if (!$event) {
      if (data.children) {
        data.children.forEach( (d: any) => {
          const target = array.find(a => a.key === d.key)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: any): any[] {
    const stack: any[] = [];
    const array: any[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level! + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: any, hashMap: { [key: string]: boolean }, array: any[]): void {
    if (!hashMap[node.key]) {
      hashMap[node.key] = true;
      array.push(node);
    }
  }

  ngOnInit(): void {
    this.orden.forEach(item => {
      this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
    });
  }

}
