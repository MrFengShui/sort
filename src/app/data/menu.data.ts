import { TreeNode } from "primeng/api";

import { PathParamModel } from "../models/config.model";

export const _MAIN_PAGE_MENU_LIST_: TreeNode<PathParamModel<string>>[] = [
    {
        key: '1',
        label: $localize`:@@main.page.menu.list.1:Overview`,
        data: {
            path: ['/main', 'overview']
        }
    },
    {
        key: '2',
        label: $localize`:@@main.page.menu.list.2:Analytics`,
        children: [
            {
                key: '2-1',
                label: $localize`:@@main.page.menu.list.2_1:Dashboard`,
                data: {
                    path: ['/main', 'analytics', 'dashboard']
                }
            },
            {
                key: '2-2',
                label: $localize`:@@main.page.menu.list.2_2:Data View`,
                data: {
                    path: ['/main', 'analytics', 'data-view']
                }
            }
        ]
    },
    {
        key: '3',
        label: $localize`:@@main.page.menu.list.3:Playground`,
        children: [
            {
                key: '3-1',
                label: $localize`:@@main.page.menu.list.3_1:Comparison Sorting`,
                children: [
                    {
                        key: '3-1-1',
                        label: $localize`:@@main.page.menu.list.3_1_1:Bubble-Style Sorting`,
                        children: [
                            {
                                key: '3-1-1-11',
                                label: $localize`:@@main.page.menu.list.3_1_1_11:Exchange Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'exchange_sort'
                                }
                            },
                            {
                                key: '3-1-1-12',
                                label: $localize`:@@main.page.menu.list.3_1_1_12:Bubble Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'bubble_sort'
                                }
                            },
                            {
                                key: '3-1-1-13',
                                label: $localize`:@@main.page.menu.list.3_1_1_13:ShakerBubble Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'shaker_bubble_sort'
                                }
                            },
                            {
                                key: '3-1-1-14',
                                label: $localize`:@@main.page.menu.list.3_1_1_14:Duo Bubble Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'duo_bubble_sort'
                                }
                            },
                            {
                                key: '3-1-1-15',
                                label: $localize`:@@main.page.menu.list.3_1_1_15:Shell Bubble Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'shell_bubble_sort'
                                }
                            },
                            {
                                key: '3-1-1-21',
                                label: $localize`:@@main.page.menu.list.3_1_1_21:Comb Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'comb_sort'
                                }
                            },
                            {
                                key: '3-1-1-31',
                                label: $localize`:@@main.page.menu.list.3_1_1_31:Odd-Even Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'odd_even_sort'
                                }
                            },
                            {
                                key: '3-1-1-32',
                                label: $localize`:@@main.page.menu.list.3_1_1_32:Shaker Odd-Even Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'shaker_odd_even_sort'
                                }
                            }
                        ]
                    },
                    {
                        key: '3-1-2',
                        label: $localize`:@@main.page.menu.list.3_1_2:Insertion-Style Sorting`,
                        children: [
                            {
                                key: '3-1-2-11',
                                label: $localize`:@@main.page.menu.list.3_1_2_11:Gnome Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'gnome_sort'
                                }
                            },
                            {
                                key: '3-1-2-12',
                                label: $localize`:@@main.page.menu.list.3_1_2_12:Binary Search Gnome Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'binary_search_gnome_sort'
                                }
                            },
                            {
                                key: '3-1-2-21',
                                label: $localize`:@@main.page.menu.list.3_1_2_21:Insertion Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'insertion_sort'
                                }
                            },
                            {
                                key: '3-1-2-22',
                                label: $localize`:@@main.page.menu.list.3_1_2_22:Shaker Insertion Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'shaker_insertion_sort'
                                }
                            },
                            {
                                key: '3-1-2-23',
                                label: $localize`:@@main.page.menu.list.3_1_2_23:Binary Search Insertion Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'binary_search_insertion_sort'
                                }
                            },
                            {
                                key: '3-1-2-31',
                                label: $localize`:@@main.page.menu.list.3_1_2_31:Shell Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'shell_sort'
                                }
                            }
                        ]
                    },
                    {
                        key: '3-1-3',
                        label: $localize`:@@main.page.menu.list.3_1_3:Selection-Style Sorting`,
                        children: [
                            {
                                key: '3-1-3-11',
                                label: $localize`:@@main.page.menu.list.3_1_3_11:Selection Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'selection_sort'
                                }
                            },
                            {
                                key: '3-1-3-12',
                                label: $localize`:@@main.page.menu.list.3_1_3_12:Shaker Selection Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'shaker_selection_sort'
                                }
                            },
                            {
                                key: '3-1-3-13',
                                label: $localize`:@@main.page.menu.list.3_1_3_13:Binary Search Selection Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'binary_search_selection_sort'
                                }
                            },
                            {
                                key: '3-1-3-21',
                                label: $localize`:@@main.page.menu.list.3_1_3_21:Heap Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'heap_sort'
                                }
                            },
                            {
                                key: '3-1-3-22',
                                label: $localize`:@@main.page.menu.list.3_1_3_22:Ternary Heap Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'ternary_heap_sort'
                                }
                            }
                        ]
                    },
                    {
                        key: '3-1-5',
                        label: $localize`:@@main.page.menu.list.3_1_5:Bisection-Style Sorting`,
                        children: [
                            {
                                key: '3-1-5-1',
                                label: $localize`:@@main.page.menu.list.3_1_5_1:Quick Sort`,
                                children: [
                                    {
                                        key: '3-1-5-1-11',
                                        label: $localize`:@@main.page.menu.list.3_1_5_1_11:Quick Sort (Recursive)`,
                                        data: {
                                            path: ['/main', 'playground'],
                                            param: 'quick_sort_recursive'
                                        }
                                    },
                                    {
                                        key: '3-1-5-1-12',
                                        label: $localize`:@@main.page.menu.list.3_1_5_1_12:Quick Sort (Iterative)`,
                                        data: {
                                            path: ['/main', 'playground'],
                                            param: 'quick_sort_iterative'
                                        }
                                    },
                                    {
                                        key: '3-1-5-1-21',
                                        label: $localize`:@@main.page.menu.list.3_1_5_1_21:Two-Way Quick Sort (Recursive)`,
                                        data: {
                                            path: ['/main', 'playground'],
                                            param: '2way_quick_sort_recursive'
                                        }
                                    },
                                    {
                                        key: '3-1-5-1-22',
                                        label: $localize`:@@main.page.menu.list.3_1_5_1_22:Two-Way Quick Sort (Iterative)`,
                                        data: {
                                            path: ['/main', 'playground'],
                                            param: '2way_quick_sort_iterative'
                                        }
                                    },
                                    {
                                        key: '3-1-5-1-23',
                                        label: $localize`:@@main.page.menu.list.3_1_5_1_23:Mean Quick Sort (Recursive)`,
                                        data: {
                                            path: ['/main', 'playground'],
                                            param: 'mean_quick_sort_recursive'
                                        }
                                    },
                                    {
                                        key: '3-1-5-1-24',
                                        label: $localize`:@@main.page.menu.list.3_1_5_1_24:Mean Quick Sort (Iterative)`,
                                        data: {
                                            path: ['/main', 'playground'],
                                            param: 'mean_quick_sort_iterative'
                                        }
                                    },
                                    {
                                        key: '3-1-5-1-25',
                                        label: $localize`:@@main.page.menu.list.3_1_5_1_25:Log Quick Sort (Recursive)`,
                                        data: {
                                            path: ['/main', 'playground'],
                                            param: 'log_quick_sort_recursive'
                                        }
                                    },
                                    {
                                        key: '3-1-5-1-26',
                                        label: $localize`:@@main.page.menu.list.3_1_5_1_26:Log Quick Sort (Iterative)`,
                                        data: {
                                            path: ['/main', 'playground'],
                                            param: 'log_quick_sort_iterative'
                                        }
                                    },
                                    {
                                        key: '3-1-5-1-27',
                                        label: $localize`:@@main.page.menu.list.3_1_5_1_27:Three-Way Quick Sort (Recursive)`,
                                        data: {
                                            path: ['/main', 'playground'],
                                            param: '3way_quick_sort_recursive'
                                        }
                                    },
                                    {
                                        key: '3-1-5-1-28',
                                        label: $localize`:@@main.page.menu.list.3_1_5_1_28:Three-Way Quick Sort (Iterative)`,
                                        data: {
                                            path: ['/main', 'playground'],
                                            param: '3way_quick_sort_iterative'
                                        }
                                    },
                                    {
                                        key: '3-1-5-1-29',
                                        label: $localize`:@@main.page.menu.list.3_1_5_1_29:Dual-Pivot Quick Sort (Recursive)`,
                                        data: {
                                            path: ['/main', 'playground'],
                                            param: 'dual_pivot_sort_recursive'
                                        }
                                    },
                                    {
                                        key: '3-1-5-1-30',
                                        label: $localize`:@@main.page.menu.list.3_1_5_1_30:Dual-Pivot Quick Sort (Iterative)`,
                                        data: {
                                            path: ['/main', 'playground'],
                                            param: 'dual_pivot_sort_iterative'
                                        }
                                    }
                                ]
                            },
                            {
                                key: '3-1-5-11',
                                label: $localize`:@@main.page.menu.list.3_1_5_11:Circle Sort (Recursive)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'circle_sort_recursive'
                                }
                            },
                            {
                                key: '3-1-5-12',
                                label: $localize`:@@main.page.menu.list.3_1_5_12:Circle Sort (Iterative)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'circle_sort_iterative'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                key: '3-2',
                label: $localize`:@@main.page.menu.list.3_2:Distribution Sorting`,
                children: [
                    {
                        key: '3-2-1',
                        label: $localize`:@@main.page.menu.list.3_2_1:Bucket-Style Sorting`,
                        children: [
                            {
                                key: '3-2-1-1',
                                label: $localize`:@@main.page.menu.list.3_2_1_1:Bucket Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'bucket_sort'
                                }
                            },
                            {
                                key: '3-2-1-2',
                                label: $localize`:@@main.page.menu.list.3_2_1_2:Bucket Sort (In-Place)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'bucket_sort_inplace'
                                }
                            },
                            {
                                key: '3-2-1-3',
                                label: $localize`:@@main.page.menu.list.3_2_1_3:Slots Bucket Sort (Recursive)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'slots_bucket_sort_recursive'
                                }
                            },
                            {
                                key: '3-2-1-4',
                                label: $localize`:@@main.page.menu.list.3_2_1_4:Slots Bucket Sort (Iterative)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'slots_bucket_sort_iterative'
                                }
                            }
                        ]
                    },
                    {
                        key: '3-2-2',
                        label: $localize`:@@main.page.menu.list.3_2_2:Radix Sorting`,
                        children: [
                            {
                                key: '3-2-2-1',
                                label: $localize`:@@main.page.menu.list.3_2_2_1:LSD Radix Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'lsd_radix_sort'
                                }
                            },
                            {
                                key: '3-2-2-2',
                                label: $localize`:@@main.page.menu.list.3_2_2_2:LSD Radix Sort (In-Place)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'lsd_radix_sort_inplace'
                                }
                            },
                            {
                                key: '3-2-2-3',
                                label: $localize`:@@main.page.menu.list.3_2_2_3:MSD Radix Sort (Recursive)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'msd_radix_sort_recursive'
                                }
                            },
                            {
                                key: '3-2-2-4',
                                label: $localize`:@@main.page.menu.list.3_2_2_4:MSD Radix Sort (Iterative)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'msd_radix_sort_iterative'
                                }
                            },
                            {
                                key: '3-2-2-5',
                                label: $localize`:@@main.page.menu.list.3_2_2_5:MSD Radix Sort (In-Place)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'msd_radix_sort_inplace'
                                }
                            }
                        ]
                    },
                    {
                        key: '3-2-3',
                        label: $localize`:@@main.page.menu.list.3_2_2:Merge-Style Sorting`,
                        children: [
                            {
                                key: '3-2-3-11',
                                label: $localize`:@@main.page.menu.list.3_2_3_11:Merge Sort (Recursive)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'merge_sort_recursive'
                                }
                            },
                            {
                                key: '3-2-3-12',
                                label: $localize`:@@main.page.menu.list.3_2_3_12:Merge Sort (Iterative)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'merge_sort_iterative'
                                }
                            },
                            {
                                key: '3-2-3-13',
                                label: $localize`:@@main.page.menu.list.3_2_3_13:In-Place Merge Sort (Recursive)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'in_place_merge_sort_recursive'
                                }
                            },
                            {
                                key: '3-2-3-14',
                                label: $localize`:@@main.page.menu.list.3_2_3_14:In-Place Merge Sort (Iterative)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'in_place_merge_sort_iterative'
                                }
                            },
                            {
                                key: '3-2-3-21',
                                label: $localize`:@@main.page.menu.list.3_2_3_21:k-Way Merge Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'kway_merge_sort'
                                }
                            },
                            {
                                key: '3-2-3-31',
                                label: $localize`:@@main.page.menu.list.3_2_3_31:Weave Merge Sort (Recursive)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'weave_merge_sort_recursive'
                                }
                            },
                            {
                                key: '3-2-3-32',
                                label: $localize`:@@main.page.menu.list.3_2_3_32:Weave Merge Sort (Iterative)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'weave_merge_sort_iterative'
                                }
                            },
                            {
                                key: '3-2-3-33',
                                label: $localize`:@@main.page.menu.list.3_2_3_33:In-Place Weave Merge Sort (Recursive)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'in_place_weave_merge_sort_recursive'
                                }
                            },
                            {
                                key: '3-2-3-34',
                                label: $localize`:@@main.page.menu.list.3_2_3_34:In-Place Weave Merge Sort (Iterative)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'in_place_weave_merge_sort_iterative'
                                }
                            },
                            {
                                key: '3-2-3-41',
                                label: $localize`:@@main.page.menu.list.3_2_3_41:Bubble Merge Sort (Recursive)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'bubble_merge_sort_recursive'
                                }
                            },
                            {
                                key: '3-2-3-42',
                                label: $localize`:@@main.page.menu.list.3_2_3_42:Bubble Merge Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'bubble_merge_sort_iterative'
                                }
                            },
                            {
                                key: '3-2-3-51',
                                label: $localize`:@@main.page.menu.list.3_2_3_51:Comb Merge Sort (Recursive)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'comb_merge_sort_recursive'
                                }
                            },
                            {
                                key: '3-2-3-52',
                                label: $localize`:@@main.page.menu.list.3_2_3_52:Comb Merge Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'comb_merge_sort_iterative'
                                }
                            }
                        ]
                    },
                    {
                        key: '3-2-4',
                        label: $localize`:@@main.page.menu.list.3_2_4:Bisection-Style Sort (Recursive)`,
                        children: [
                            {
                                key: '3-2-4-1',
                                label: $localize`:@@main.page.menu.list.3_2_4_1:Log Sort (Recursive)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'log_sort_recursive'
                                }
                            },
                            {
                                key: '3-2-4-2',
                                label: $localize`:@@main.page.menu.list.3_2_4_2:Log Sort (Iterative)`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'log_sort_iterative'
                                }
                            },
                            {
                                key: '3-2-4-1',
                                label: $localize`:@@main.page.menu.list.3_2_4_3:In-Place Log Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'in_place_log_sort'
                                }
                            },
                        ]
                    },
                    {
                        key: '3-2-11',
                        label: $localize`:@@main.page.menu.list.3_2_11:Counting Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'counting_sort'
                        }
                    },
                    {
                        key: '3-2-21',
                        label: $localize`:@@main.page.menu.list.3_2_21:Flash Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'flash_sort'
                        }
                    },
                    {
                        key: '3-2-31',
                        label: $localize`:@@main.page.menu.list.3_2_31:Interpole Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'interpole_sort'
                        }
                    },
                    {
                        key: '3-2-41',
                        label: $localize`:@@main.page.menu.list.3_2_41:Pigeonhole Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'pigeonhole_sort'
                        }
                    }
                ]
            },
            {
                key: '3-3',
                label: $localize`:@@main.page.menu.list.3_3:Hybrid Sorting`,
                children: [
                    {
                        key: '3-3-11',
                        label: $localize`:@@main.page.menu.list.3_3_1:Block Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'block_sort'
                        }
                    },
                    {
                        key: '3-3-21',
                        label: $localize`:@@main.page.menu.list.3_3_2:Introspection Sort (Recursive)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'intro_sort_recursive'
                        }
                    },
                    {
                        key: '3-3-22',
                        label: $localize`:@@main.page.menu.list.3_3_3:Introspection Sort (Iterative)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'intro_sort_iterative'
                        }
                    },
                    {
                        key: '3-3-31',
                        label: $localize`:@@main.page.menu.list.3_3_4:Library Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'library_sort'
                        }
                    },
                    {
                        key: '3-3-41',
                        label: $localize`:@@main.page.menu.list.3_3_5:Smooth Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'smooth_sort'
                        }
                    },
                    {
                        key: '3-3-51',
                        label: $localize`:@@main.page.menu.list.3_3_6:Tim Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'tim_sort'
                        }
                    },
                    {
                        key: '3-3-51',
                        label: $localize`:@@main.page.menu.list.3_3_7:In-Place Tim Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'in_place_tim_sort'
                        }
                    },
                    {
                        key: '3-3-53',
                        label: $localize`:@@main.page.menu.list.3_3_8:Weave Tim Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'weave_tim_sort'
                        }
                    }
                ]
            },
            {
                key: '3-4',
                label: $localize`:@@main.page.menu.list.3_4:Parallel-Network Sorting`,
                children: [
                    {
                        key: '3-4-11',
                        label: $localize`:@@main.page.menu.list.3_4_11:Batcher Sort (Top-Down)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'batcher_sort_top_down'
                        }
                    },
                    {
                        key: '3-4-12',
                        label: $localize`:@@main.page.menu.list.3_4_12:Batcher Sort (Bottom-Up)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'batcher_sort_bottom_up'
                        }
                    },
                    {
                        key: '3-4-21',
                        label: $localize`:@@main.page.menu.list.3_4_21:Bitonic Sort (Top-Down)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'bitonic_sort_top_down'
                        }
                    },
                    {
                        key: '3-4-22',
                        label: $localize`:@@main.page.menu.list.3_4_22:Bitonic Sort (Bottom-Up)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'bitonic_sort_bottom_up'
                        }
                    },
                    {
                        key: '3-4-31',
                        label: $localize`:@@main.page.menu.list.3_4_31:Pairwise Sort (Top-Down)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'pairwise_sort_top_down'
                        }
                    },
                    {
                        key: '3-4-32',
                        label: $localize`:@@main.page.menu.list.3_4_32:Pairwise Sort (Bottom-Up)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'pairwise_sort_bottom_up'
                        }
                    },
                    {
                        key: '3-4-31',
                        label: $localize`:@@main.page.menu.list.3_4_31:Shear Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'shear_sort'
                        }
                    },
                    {
                        key: '3-4-32',
                        label: $localize`:@@main.page.menu.list.3_4_32:Shear Sort (Insertion)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'shear_sort_insertion'
                        }
                    },
                    {
                        key: '3-4-33',
                        label: $localize`:@@main.page.menu.list.3_4_33:Shear Sort (Selection)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'shear_sort_selection'
                        }
                    }
                ]
            },
            {
                key: '3-5',
                label: $localize`:@@main.page.menu.list.3_5:Curious Sorting`,
                children: [
                    {
                        key: '3-5-1',
                        label: $localize`:@@main.page.menu.list.3_5_1:Permutation Sorting`,
                        children: [
                            {
                                key: '3-5-1-1',
                                label: $localize`:@@main.page.menu.list.3_5_1_1:Bogo Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'bogo_sort'
                                }
                            },
                            {
                                key: '3-5-1-2',
                                label: $localize`:@@main.page.menu.list.3_5_1_2:Bozo Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'bozo_sort'
                                }
                            },
                            {
                                key: '3-5-1-3',
                                label: $localize`:@@main.page.menu.list.3_5_1_3:Bubble Bogo Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'bubble_bogo_sort'
                                }
                            },
                            {
                                key: '3-5-1-4',
                                label: $localize`:@@main.page.menu.list.3_5_1_4:Shaker Bubble Bogo Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'shaker_bubble_bogo_sort'
                                }
                            },
                            {
                                key: '3-5-1-5',
                                label: $localize`:@@main.page.menu.list.3_5_1_5:Insertion Bogo Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'Insertion Bogo Sort'
                                }
                            },
                            {
                                key: '3-5-1-6',
                                label: $localize`:@@main.page.menu.list.3_5_1_6:Selection Bogo Sort`,
                                data: {
                                    path: ['/main', 'playground'],
                                    param: 'selection_bogo_sort'
                                }
                            }
                        ]
                    },
                    {
                        key: '3-5-11',
                        label: $localize`:@@main.page.menu.list.3_5_11:Binary Search Tree Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'bst_tree'
                        }
                    },
                    {
                        key: '3-5-21',
                        label: $localize`:@@main.page.menu.list.3_5_21:Cycle Sort (Recursive)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'cycle_sort_recursive'
                        }
                    },
                    {
                        key: '3-5-22',
                        label: $localize`:@@main.page.menu.list.3_5_22:Cycle Sort (Iterative)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'cycle_sort_iterative'
                        }
                    },
                    {
                        key: '3-5-31',
                        label: $localize`:@@main.page.menu.list.3_5_31:Gravity Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'gravity_sort'
                        }
                    },
                    {
                        key: '3-5-32',
                        label: $localize`:@@main.page.menu.list.3_5_32:Simple Gravity Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'simple_gravity_sort'
                        }
                    },
                    {
                        key: '3-5-41',
                        label: $localize`:@@main.page.menu.list.3_5_51:Pancake Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'pancake_sort'
                        }
                    },
                    {
                        key: '3-5-42',
                        label: $localize`:@@main.page.menu.list.3_5_32:Shaker Pancake Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'shaker_pancake_sort'
                        }
                    },
                    {
                        key: '3-5-51',
                        label: $localize`:@@main.page.menu.list.3_5_51:Patience Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'patience_sort'
                        }
                    },
                    {
                        key: '3-5-61',
                        label: $localize`:@@main.page.menu.list.3_5_61:Sleep Sort (Synchronized)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'sleep_sort_synchronized'
                        }
                    },
                    {
                        key: '3-5-62',
                        label: $localize`:@@main.page.menu.list.3_5_62:Sleep Sort (Asynchronized)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'sleep_sort_asynchronized'
                        }
                    },
                    {
                        key: '3-5-71',
                        label: $localize`:@@main.page.menu.list.3_5_71:Slow Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'slow_sort'
                        }
                    },
                    {
                        key: '3-5-81',
                        label: $localize`:@@main.page.menu.list.3_5_81:Spaghetti Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'spaghetti_sort'
                        }
                    },
                    {
                        key: '3-5-91',
                        label: $localize`:@@main.page.menu.list.3_5_91:Stalin Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'stalin_sort'
                        }
                    },
                    {
                        key: '3-5-92',
                        label: $localize`:@@main.page.menu.list.3_5_81:In-Place Stalin Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'in_place_stalin_sort'
                        }
                    },
                    {
                        key: '3-5-111',
                        label: $localize`:@@main.page.menu.list.3_5_111:Strand Sort (Recursive)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'strand_sort_recursive'
                        }
                    },
                    {
                        key: '3-5-112',
                        label: $localize`:@@main.page.menu.list.3_5_112:Strand Sort (Iterative)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'stalin_sort_iterative'
                        }
                    },
                    {
                        key: '3-5-113',
                        label: $localize`:@@main.page.menu.list.3_5_113:In-Place Strand Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'in_place_strand_sort'
                        }
                    },
                    {
                        key: '3-5-121',
                        label: $localize`:@@main.page.menu.list.3_5_121:Stooge Sort (Recursive)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'stooge_sort_recursive'
                        }
                    },
                    {
                        key: '3-5-122',
                        label: $localize`:@@main.page.menu.list.3_5_122:Stooge Sort (Iterative)`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'stooge_sort_iterative'
                        }
                    },
                    {
                        key: '3-5-131',
                        label: $localize`:@@main.page.menu.list.3_5_131:Tournament Sort`,
                        data: {
                            path: ['/main', 'playground'],
                            param: 'tournament_sort'
                        }
                    }
                ]
            }
        ]
    }
]
