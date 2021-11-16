let mover = {
    getDirection() {
        const availlableDirections = [2, 4, 6, 8, 1, 3, 7, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число, куда вы хотите переместиться (используйте NUM-клавиши), или "Отмена" для выхода'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availlableDirections.includes(direction)) {
                alert("игрок стоит на месте");
                continue;
            }
            return direction;
        }
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 2:
                nextPosition.x++;
                break;
            case 4:
                nextPosition.y--;
                break;
            case 8:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.y++;
                break;
            case 1:
                nextPosition.x++;
                nextPosition.y--;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 9:
                nextPosition.y++;
                nextPosition.x--;
                break;
        }
        if (nextPosition.x >= 0 && nextPosition.x <= 10 && nextPosition.y >= 0 && nextPosition.y <= 10) {
            return nextPosition;
        }
        return {
            x: player.x,
            y: player.y
        };



    }
}