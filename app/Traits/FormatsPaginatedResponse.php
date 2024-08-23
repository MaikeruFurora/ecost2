<?php

namespace App\Traits;

trait FormatsPaginatedResponse
{
    public function formatPaginatedResponse($results,$data=null)
    {
        return [
            'current_page'   => $results->currentPage(),
            'dataList'       => !empty($data) ? $data : $results->items(),
            'first_page_url' => $results->url(1),
            'from'           => $results->firstItem(),
            'last_page'      => $results->lastPage(),
            'last_page_url'  => $results->url($results->lastPage()),
            'next_page_url'  => $results->nextPageUrl(),
            'per_page'       => $results->perPage(),
            'prev_page_url'  => $results->previousPageUrl(),
            'to'             => $results->lastItem(),
            'total'          => $results->total(),
            'links'          => [
                'first' => $results->url(1),
                'last'  => $results->url($results->lastPage()),
                'prev'  => $results->previousPageUrl(),
                'next'  => $results->nextPageUrl(),
            ],
        ];
    }
}
