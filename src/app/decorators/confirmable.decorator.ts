import Swal, { SweetAlertOptions } from 'sweetalert2';

export function Confirmable(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // we first cache the original method implementation
  const originalMethod = descriptor.value;

  // the configuration object for sweetalert
  const config: SweetAlertOptions = {
    title: 'Are you sure?',
    html: 'Do you want to perform this action?',
    showDenyButton: true,
    confirmButtonText: 'Yes',
    denyButtonText: 'No',
    icon: 'question',
  };
  // then we overwrite it with a new implementation,
  // ...args represent the original arguments

  descriptor.value = async function (...args: any) {
    const res = await Swal.fire(config);
    // fire sweetalert with the config object
    if (res.isConfirmed) {
      // if user clicked yes,
      // we run the original method with the original arguments
      const result = originalMethod.apply(this, args);

      // and return the result
      return result;
    }
  };

  return descriptor;
}
