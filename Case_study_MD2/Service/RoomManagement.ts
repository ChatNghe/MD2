import {Room} from "../Model/Room";

export class RoomManagerment {
    listRoom: Room[] = [];

    add(room: Room) {
        this.listRoom.push(room);
    }

    searchRoomById(id: string): number {
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    searchRoomByName(name: string): number {
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].name === name) {
                return i;
            }
        }
        return -1;
    }

    searchEmptyRoomByPrice(low: number, high: number) {
        let arr = [];
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].price >= low && this.listRoom[i].price <= high && this.listRoom[i].status === 'empty') {
                arr.push(this.listRoom[i])
            }
        }
        return arr;
    }


    editRoomById(id: string, t: Room): void {
        let index = this.searchRoomById(id);
        if (index === -1) {
            console.log('Not exist')
        } else {
            this.listRoom[index] = t;
            console.log('Edit success')
        }
    }

    displayAll() {
        return this.listRoom;
    }
}