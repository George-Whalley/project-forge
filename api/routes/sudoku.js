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
        [input.block_one_box_one, input.block_one_box_two, input.block_one_box_three],
        [input.block_one_box_four, input.block_one_box_five, input.block_one_box_six],
        [input.block_one_box_severn, input.block_one_box_eight, input.block_one_box_nine]
   ];
    // Box Two Values
    const mda_two = [
        [input.block_two_box_one, input.block_two_box_two, input.block_two_box_three],
        [input.block_two_box_four, input.block_two_box_five, input.block_two_box_six],
        [input.block_two_box_severn, input.block_two_box_eight, input.block_two_box_nine]
    ];
    // Box Three Values
    const mda_three = [
        [input.block_three_box_one, input.block_three_box_two, input.block_three_box_three],
        [input.block_three_box_four, input.block_three_box_five, input.block_three_box_six],
        [input.block_three_box_severn, input.block_three_box_eight, input.block_three_box_nine]
    ];
    // Box Four Values
    const mda_four = [
        [input.block_four_box_one, input.block_four_box_two, input.block_four_box_three],
        [input.block_four_box_four, input.block_four_box_five, input.block_four_box_six],
        [input.block_four_box_severn, input.block_four_box_eight, input.block_four_box_nine]
    ];
    // Box Five Values
    const mda_five = [
        [input.block_five_box_one, input.block_five_box_two, input.block_five_box_three],
        [input.block_five_box_four, input.block_five_box_five, input.block_five_box_six],
        [input.block_five_box_severn, input.block_five_box_eight, input.block_five_box_nine]
    ];
    // Box Six Values
    const mda_six = [
        [input.block_six_box_one, input.block_six_box_two, input.block_six_box_three],
        [input.block_six_box_four, input.block_six_box_five, input.block_six_box_six],
        [input.block_six_box_severn, input.block_six_box_eight, input.block_six_box_nine]
    ];
    // Box Severn Values
    const mda_severn = [
        [input.block_severn_box_one, input.block_severn_box_two, input.block_severn_box_three],
        [input.block_severn_box_four, input.block_severn_box_five, input.block_severn_box_six],
        [input.block_severn_box_severn, input.block_severn_box_eight, input.block_severn_box_nine]
    ];
    // Box Eight Values
    const mda_eight = [
        [input.block_eight_box_one, input.block_eight_box_two, input.block_eight_box_three],
        [input.block_eight_box_four, input.block_eight_box_five, input.block_eight_box_six],
        [input.block_eight_box_severn, input.block_eight_box_eight, input.block_eight_box_nine]
    ];
    // Box Nine Values
    const mda_nine = [
        [input.block_nine_box_one, input.block_nine_box_two, input.block_nine_box_three],
        [input.block_nine_box_four, input.block_nine_box_five, input.block_nine_box_six],
        [input.block_nine_box_severn, input.block_nine_box_eight, input.block_nine_box_nine]
    ];
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    // ###############################################################################################################################################
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    // ROWS
    /// -----------------------------------------------------------------------------------------------------------------------------------------------
    const rows = [
        [mda_one[0], mda_two[0], mda_three[0]],
        [mda_one[1], mda_two[1], mda_three[1]],
        [mda_one[2], mda_two[2], mda_three[2]],

        [mda_four[0], mda_five[0], mda_six[0]],
        [mda_four[1], mda_five[1], mda_six[1]],
        [mda_four[2], mda_five[2], mda_six[2]],

        [mda_severn[0], mda_eight[0], mda_nine[0]],
        [mda_severn[1], mda_eight[1], mda_nine[1]],
        [mda_severn[2], mda_eight[2], mda_nine[2]],

    ]
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    // ###############################################################################################################################################
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    // COLS
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    const cols = [
        [mda_one[0][0], mda_one[1][0], mda_one[2][0], mda_four[0][0], mda_four[1][0], mda_four[2][0] , mda_severn[0][0], mda_severn[1][0], mda_severn[2][0]],
        [mda_one[0][1], mda_one[1][1], mda_one[2][1], mda_four[0][1], mda_four[1][1], mda_four[2][1] , mda_severn[0][1], mda_severn[1][1], mda_severn[2][1]],
        [mda_one[0][2], mda_one[1][2], mda_one[2][2], mda_four[0][2], mda_four[1][2], mda_four[2][2] , mda_severn[0][2], mda_severn[1][2], mda_severn[2][2]],

        [mda_two[0][0], mda_two[1][0], mda_two[2][0], mda_five[0][0], mda_five[1][0], mda_five[2][0] , mda_eight[0][0], mda_eight[1][0], mda_eight[2][0]],
        [mda_two[0][1], mda_two[1][1], mda_two[2][1], mda_five[0][1], mda_five[1][1], mda_five[2][1] , mda_eight[0][1], mda_eight[1][1], mda_eight[2][1]],
        [mda_two[0][2], mda_two[1][2], mda_two[2][2], mda_five[0][2], mda_five[1][2], mda_five[2][2] , mda_eight[0][2], mda_eight[1][2], mda_eight[2][2]],

        [mda_three[0][0], mda_three[1][0], mda_three[2][0], mda_six[0][0], mda_six[1][0], mda_six[2][0] , mda_nine[0][0], mda_nine[1][0], mda_nine[2][0]],
        [mda_three[0][1], mda_three[1][1], mda_three[2][1], mda_six[0][1], mda_six[1][1], mda_six[2][1] , mda_nine[0][1], mda_nine[1][1], mda_nine[2][1]],
        [mda_three[0][2], mda_three[1][2], mda_three[2][2], mda_six[0][2], mda_six[1][2], mda_six[2][2] , mda_nine[0][2], mda_nine[1][2], mda_nine[2][2]],
        
    ]
    // -----------------------------------------------------------------------------------------------------------------------------------------------
    // ###############################################################################################################################################
    // Solve by number
    function solve_by_number(s_num, boxes, rows, cols){
        // s_mun = number being searched for
    }

})

module.exports = router;