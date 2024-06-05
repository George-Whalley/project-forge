// ---------------------------------------------------------------------------------------------------------------------------------------------------
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// REQUEST SOLVE
// ---------------------------------------------------------------------------------------------------------------------------------------------------
router.post("/", (req, res) => {
    const input = req.body.input;
    console.log("ATTEMPTING SOLVE")
    // ###############################################################################################################################################
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    // BOXES
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    // Box One Values
   const mda_one = [
        input.block_one_box_one, input.block_one_box_two, input.block_one_box_three, 
            input.block_one_box_four, input.block_one_box_five, input.block_one_box_six, 
            input.block_one_box_severn, input.block_one_box_eight, input.block_one_box_nine
   ];
    // Box Two Values
    const mda_two = [
        input.block_two_box_one, input.block_two_box_two, input.block_two_box_three, 
            input.block_two_box_four, input.block_two_box_five, input.block_two_box_six, 
            input.block_two_box_severn, input.block_two_box_eight, input.block_two_box_nine
    ];
    // Box Three Values
    const mda_three = [
        input.block_three_box_one, input.block_three_box_two, input.block_three_box_three, 
            input.block_three_box_four, input.block_three_box_five, input.block_three_box_six, 
            input.block_three_box_severn, input.block_three_box_eight, input.block_three_box_nine
    ];
    // Box Four Values
    const mda_four = [
        input.block_four_box_one, input.block_four_box_two, input.block_four_box_three, 
            input.block_four_box_four, input.block_four_box_five, input.block_four_box_six,
            input.block_four_box_severn, input.block_four_box_eight, input.block_four_box_nine
    ];
    // Box Five Values
    const mda_five = [
        input.block_five_box_one, input.block_five_box_two, input.block_five_box_three, 
            input.block_five_box_four, input.block_five_box_five, input.block_five_box_six, 
            input.block_five_box_severn, input.block_five_box_eight, input.block_five_box_nine
    ];
    // Box Six Values
    const mda_six = [
        input.block_six_box_one, input.block_six_box_two, input.block_six_box_three, 
            input.block_six_box_four, input.block_six_box_five, input.block_six_box_six, 
            input.block_six_box_severn, input.block_six_box_eight, input.block_six_box_nine
    ];
    // Box Severn Values
    const mda_severn = [
        input.block_severn_box_one, input.block_severn_box_two, input.block_severn_box_three, 
            input.block_severn_box_four, input.block_severn_box_five, input.block_severn_box_six, 
            input.block_severn_box_severn, input.block_severn_box_eight, input.block_severn_box_nine
    ];
    // Box Eight Values
    const mda_eight = [
        input.block_eight_box_one, input.block_eight_box_two, input.block_eight_box_three, 
            input.block_eight_box_four, input.block_eight_box_five, input.block_eight_box_six, 
            input.block_eight_box_severn, input.block_eight_box_eight, input.block_eight_box_nine
    ];
    // Box Nine Values
    const mda_nine = [
        input.block_nine_box_one, input.block_nine_box_two, input.block_nine_box_three, 
            input.block_nine_box_four, input.block_nine_box_five, input.block_nine_box_six, 
            input.block_nine_box_severn, input.block_nine_box_eight, input.block_nine_box_nine
    ];
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    // ###############################################################################################################################################
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    // ROWS
    /// -----------------------------------------------------------------------------------------------------------------------------------------------
    const rows = [
        [mda_one[0],mda_one[1],mda_one[2], mda_two[0],mda_two[1],mda_two[2], mda_three[0],mda_three[1],mda_three[2]],
        [mda_one[3],mda_one[4],mda_one[5], mda_two[3],mda_two[4],mda_two[5], mda_three[3],mda_three[4],mda_three[5]],
        [mda_one[6],mda_one[7],mda_one[8], mda_two[6],mda_two[7],mda_two[8], mda_three[6],mda_three[7],mda_three[8]],

        [mda_four[0],mda_four[1],mda_four[2], mda_five[0],mda_five[1],mda_five[2], mda_six[0],mda_six[1],mda_six[2]],
        [mda_four[3],mda_four[4],mda_four[5], mda_five[3],mda_five[4],mda_five[5], mda_six[3],mda_six[4],mda_six[5]],
        [mda_four[6],mda_four[7],mda_four[8], mda_five[6], mda_five[7], mda_five[8], mda_six[6], mda_six[7], mda_six[8]],

        [mda_severn[0],mda_severn[1],mda_severn[2], mda_eight[0],mda_eight[2],mda_eight[2], mda_nine[0],mda_nine[1],mda_nine[2]],
        [mda_severn[3],mda_severn[4],mda_severn[5], mda_eight[3],mda_eight[4],mda_eight[5], mda_nine[3],mda_nine[4],mda_nine[5]],
        [mda_severn[6],mda_severn[7],mda_severn[8], mda_eight[6],mda_eight[7],mda_eight[8], mda_nine[6],mda_nine[7],mda_nine[8]],

    ]
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    // ###############################################################################################################################################
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    // COLS
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    const cols = [
        [mda_one[0], mda_one[3], mda_one[6], mda_four[0], mda_four[3], mda_four[6] , mda_severn[0], mda_severn[3], mda_severn[6]],
        [mda_one[1], mda_one[4], mda_one[7], mda_four[1], mda_four[4], mda_four[7] , mda_severn[1], mda_severn[4], mda_severn[7]],
        [mda_one[2], mda_one[5], mda_one[8], mda_four[2], mda_four[5], mda_four[8] , mda_severn[2], mda_severn[5], mda_severn[8]],

        [mda_two[0], mda_two[3], mda_two[6], mda_five[0], mda_five[3], mda_five[6] , mda_eight[0], mda_eight[3], mda_eight[6]],
        [mda_two[1], mda_two[4], mda_two[7], mda_five[1], mda_five[4], mda_five[7] , mda_eight[1], mda_eight[4], mda_eight[7]],
        [mda_two[2], mda_two[5], mda_two[8], mda_five[2], mda_five[5], mda_five[8] , mda_eight[2], mda_eight[5], mda_eight[8]],

        [mda_three[0], mda_three[3], mda_three[6], mda_six[0], mda_six[3], mda_six[6] , mda_nine[0], mda_nine[3], mda_nine[6]],
        [mda_three[1], mda_three[4], mda_three[7], mda_six[1], mda_six[4], mda_six[7] , mda_nine[1], mda_nine[4], mda_nine[7]],
        [mda_three[2], mda_three[5], mda_three[8], mda_six[2], mda_six[5], mda_six[8] , mda_nine[2], mda_nine[5], mda_nine[8]], 
    ]
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    // ###############################################################################################################################################

    // Generic check if number in box
    function search_by_box(search_num, box){
        // Loop though each number in the array
        for(x=0;x<box.length;x++){
            // If the number matches the search number
            if(box[x] == search_num){
                return "true";
            }
        }
        // No match found
        return "false";
    }

    // Generic check if number in row
    function search_by_row(search_num, cell, r){
        // Row 1 Cells
        if(cell === 0 || cell === 1 || cell === 2){
            // Search row 0
            let row_one = r[0];
            // Loop through each item in row
            for(x=0;x<row_one.length;x++){
                // If the search num matches
                if(row_one[x] == search_num){
                    return "true";
                }
            }
            return "false";
        }
        // Row 2 Cells
        else if(cell === 3 || cell === 4 || cell === 5){
            // Search row 0
            let row_two = r[1];
            // Loop through each item in row
            for(x=0;x<row_two.length;x++){
                // If the search num matches
                if(row_two[x] == search_num){
                    return "true";
                }
            }
            return "false";
        }
        // Row 3 Cells
        else if(cell === 6 || cell === 7 || cell === 8){
            // Search row 0
            let row_three = r[2];
            // Loop through each item in row
            for(x=0;x<row_three.length;x++){
                // If the search num matches
                if(row_three[x] == search_num){
                    return "true";
                }
            }
            return "false";
        }
    }

    // Generic check if number in row
    function search_by_col(search_num, cell, c){
        // Col 1 Cells
        if(cell === 0 || cell === 3 || cell === 6){
            // Search row 0
            let col_one = c[0];
            // Loop through each item in row
            for(x=0;x<col_one.length;x++){
                // If the search num matches
                if(col_one[x] == search_num){
                    return "true";
                }
            }
            return "false";
        }
        // Row 2 Cells
        else if(cell === 1 || cell === 4 || cell === 7){
            // Search row 0
            let col_two = c[1];
            // Loop through each item in row
            for(x=0;x<col_two.length;x++){
                // If the search num matches
                if(col_two[x] == search_num){
                    return "true";
                }
            }
            return "false";
        }
        // Row 3 Cells
        else if(cell === 2 || cell === 5 || cell === 8){
            // Search row 0
            let col_three = c[2];
            // Loop through each item in row
            for(x=0;x<col_three.length;x++){
                // If the search num matches
                if(col_three[x] == search_num){
                    return "true";
                }
            }
            return "false";
        }
    }

    // Genertic check empty positions in box
    function empty_positions(box){
        // Array to store empty positions in box
        var pos = [];
        // Loop though each number in box
        for(x=0;x<box.length;x++){
            // If the number is missing ""
            if(!box[x]){
                pos.push(x);
            }
        }
        // return the postions that are empty in array
        return pos;
    }

    // Generic create indexes function
    function create_index(box, r, c){
        // MDA of indexes
        var all_indexes = [];
        // Loop through each item in the box
        for(cell=0;cell<box.length;cell++){
            // Create a index for each cell in box
            var index = [];
            // If the box cell is empty
            if(!box[cell]){
                // index.splice(0,0, "CELL: " + cell);
                // Check if numbers 1-9 could be valid
                for(i=0;i<9;i++){
                    // Store search var
                    var search_var = i + 1;
                    // If the search var is not already in the row
                    var is_already_in_row = String(search_by_row(search_var, cell, r));
                    // If the search var is already in the col
                    var is_already_in_col = String(search_by_col(search_var, cell, c));
                    // If the search var is already in the box
                    var is_already_in_box = String(search_by_box(search_var, box));
                    // CHECK IN BOX!
                    // console.log(cell + " " + search_var + " " + is_already_in_col);
                    // If the var wasn't already in the row, 
                    if(is_already_in_row === "false" && is_already_in_col === "false" && is_already_in_box === "false"){
                        // add to index
                        index.splice(0,0, search_var);
                    }
                }
            }
            // If the cell is not empty
            else{ 
                // Set the index to null (no index required)
                index.splice(0,0,null);
            }
            // Add index to all indexes array
            all_indexes.splice(0,0,index);
        }
        // Output index
        return (all_indexes).reverse();
    }

    // Cell one index
    var cell_one_index = create_index(mda_one, [rows[0], rows[1], rows[2]], [cols[0], cols[1], cols[2]]);
    // Cell two index
    var cell_two_index = create_index(mda_two, [rows[0], rows[1], rows[2]], [cols[3], cols[4], cols[5]]);
    // Cell three index
    var cell_three_index = create_index(mda_three, [rows[0], rows[1], rows[2]], [cols[6], cols[7], cols[8]]);

    // Cell four index
    var cell_four_index = create_index(mda_four, [rows[3], rows[4], rows[5]], [cols[0], cols[1], cols[2]]);
    // Cell five index
    var cell_five_index = create_index(mda_five, [rows[3], rows[4], rows[5]], [cols[3], cols[4], cols[5]]);
    // Cell six index
    var cell_six_index = create_index(mda_six, [rows[3], rows[4], rows[5]], [cols[6], cols[7], cols[8]]);

    // Cell severn index
    var cell_severn_index = create_index(mda_severn, [rows[6], rows[7], rows[8]], [cols[0], cols[1], cols[2]]);
    // Cell eight index
    var cell_eight_index = create_index(mda_eight, [rows[6], rows[7], rows[8]], [cols[3], cols[4], cols[5]]);
    // Cell three index
    var cell_nine_index = create_index(mda_nine, [rows[6], rows[7], rows[8]], [cols[6], cols[7], cols[8]]);

    console.log(cell_one_index);
    console.log(cell_two_index);
    console.log(cell_three_index);
    console.log(cell_four_index);
    console.log(cell_five_index);
    console.log(cell_six_index);
    console.log(cell_severn_index);
    console.log(cell_eight_index);
    console.log(cell_nine_index);
})

module.exports = router;