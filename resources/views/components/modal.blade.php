<div>
  <div class="modal fade" id="{{ $id }}" tabindex="-1" aria-labelledby="{{ $id }}Label" aria-hidden="true">
      <div class="modal-dialog modal-{{  $size }} {{ $centered?'modal-dialog-centered':'' }}">
          <div class="modal-content">
              <div class="modal-header">
                  <p class="modal-title" id="{{ $id }}Label">{{ $title }}</p>
                  <button type="button" class="btn-sm btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  {{ $slot }}
              </div>
          </div>
      </div>
  </div>
</div>