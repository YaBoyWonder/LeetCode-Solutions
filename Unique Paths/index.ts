    function uniquePaths(m: number, n: number): number {

        let grid_cell: number[][] = [];

        for (let x = 0; x < m; ++x) {
            grid_cell[x] = [];

            for (let y = 0; y < n; ++y) {

                if (x == 0 || y == 0) {
                    //only 1 cell -> only 1 method
                    grid_cell[x][y] = 1
                } else {
                    grid_cell[x][y] = grid_cell[x - 1][y] + grid_cell[x][y - 1];
                }

            }

        }


        return grid_cell[m - 1][n - 1];
        // return 0;

    };