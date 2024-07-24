<?php

namespace App\View\Components;

use Illuminate\View\Component;

class modal extends Component
{
    public $id;
    public $title;
    public $size;
    public $buttons;
    public $centered;

    public function __construct($id, $title,$size='sm',$centered=false, $buttons = [])
    {
        $this->id = $id;
        $this->title = $title;
        $this->size = $size;
        $this->buttons = $buttons;
        $this->centered = $centered;
    }

    public function render()
    {
        return view('components.modal');
    }
}
