#!/usr/bin/env bash

#垃圾桶目录
TRASH=/Users/`whoami`/.Trash


mv_single_file(){
    if test ! -z ${1}; then
        var1_top_1=`echo ${1:0:1}`
        curr_path=${1}
        if test ${var1_top_1} != "/" ; then
            curr_path=`pwd`/${1}
        fi
        full_path=${curr_path}
        if test -f ${curr_path}; then
            full_path=`echo ${curr_path%/*}`
            trash_path=${TRASH}${full_path}

        elif test -d ${curr_path}; then
            trash_path=${TRASH}${full_path}/..
        fi
        mkdir -p ${trash_path}
        mv ${curr_path} ${trash_path}/
    fi
}

var1=${1}
echo ${var1}
for i in ${var1};
do
    mv_single_file ${i}
done